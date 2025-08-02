const Product = require('./../models/productModel')
const catchAsync = require('./../utils/catchAsync')
const appError = require('./../utils/appError')
const handleFactory = require('./handleFactory')

exports.createProduct = handleFactory.createOne(Product)

exports.getALLProduct = handleFactory.getAll(Product)

exports.getOneProduct = handleFactory.getOne(Product)

exports.updateProduct = handleFactory.updateOne(Product)

exports.deleteProduct = handleFactory.deleteOne(Product)