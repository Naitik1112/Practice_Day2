const Order = require('./../models/orderModel')
const catchAsync = require('./../utils/catchAsync')
const appError = require('./../utils/appError')
const handleFactory = require('./handleFactory')

exports.createOrder = handleFactory.createOne(Order)

exports.getALLOrder = handleFactory.getAll(Order)

exports.getOneOrder = handleFactory.getOne(Order)

exports.updateOrder = handleFactory.updateOne(Order)

exports.deleteOrder = handleFactory.deleteOne(Order)