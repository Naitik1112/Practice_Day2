const express = require('express')
const orderController = require('./../controller/orderController')

const router = express.Router()

router.route('/getAll').get(orderController.getALLOrder)

router.route('/getOne/:id').get(orderController.getOneOrder)

router.route('/createOne').post(orderController.createOrder)

router.route('/update/:id').patch(orderController.updateOrder)

router.route('/delete').delete(orderController.deleteOrder)

module.exports = router