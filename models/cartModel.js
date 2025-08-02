const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    productName : {
        type : String,
        required : true
    },
    productQuantity : {
        type : Number,
        required : true
    },
    productPrice : {
        type: Number,
        required: true,
    }
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart