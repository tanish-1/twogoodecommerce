const mongoose = require("mongoose")
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    // username and password will be handled by passportLocalMongoose
    email: {
        type: String,
        required: true
    },
    cart: [
        {
            _id: false,
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema)
module.exports = User
