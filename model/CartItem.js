const mongoose = require("mongoose")

const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }

});

const CartItem = model('CartItem', cartItemSchema);

module.exports = CartItem;
