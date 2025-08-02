const express = require('express')
const productController = require('./../controller/productController')

const router = express.Router()

router.route('/getAll').get(productController.getALLProduct)

router.route('/getOne/:id').get(productController.getOneProduct)

router.route('/createOne').post(productController.createProduct)

router.route('/update/:id').patch(productController.updateProduct)

router.route('/delete').delete(productController.deleteProduct)

module.exports = router