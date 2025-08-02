const User = require('./../models/userModel')
const catchAsync = require('./../utils/catchAsync')
const appError = require('./../utils/appError')
const handleFactory = require('./handleFactory')

exports.createUser = handleFactory.createOne(User)

exports.getALLUser = handleFactory.getAll(User)

exports.getOneUser = handleFactory.getOne(User)

exports.updateUser = handleFactory.updateOne(User)

exports.deleteUser = handleFactory.deleteOne(User)