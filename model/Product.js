const mongoose = require("mongoose")
const { Schema } = mongoose
// Define the product schema
const productSchema = new Schema({

    image: {
        type: String,
        required: true
    },
    'data-color': {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    types:{
        type: String,
        
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]

});

// Create the Product model
const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
module.exports = Product
