const Cart = require('./../models/cartModel')
const catchAsync = require('./../utils/catchAsync')
const appError = require('./../utils/appError')
const handleFactory = require('./handleFactory')

exports.createCart = handleFactory.createOne(Cart)

exports.getALLCart = handleFactory.getAll(Cart)

exports.getOneCart = handleFactory.getOne(Cart)

exports.updateCart = handleFactory.updateOne(Cart)

exports.deleteCart = handleFactory.deleteOne(Cart)