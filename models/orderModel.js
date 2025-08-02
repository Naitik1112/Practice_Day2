const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    adminId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    status : {
        type : String,
        enum : ['placed', 'packed' , 'dispatched','delivered','cancelled']
    },
    feedback : {
        type : String
    },
    deliveryInstructions : {
        type : String
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
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Order = mongoose.model('Product',orderSchema)

module.exports = Order