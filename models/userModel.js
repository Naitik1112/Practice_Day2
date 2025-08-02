const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        required : true
    },
    userEmail : {
        type: String,
        required: true,
        unique : true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User