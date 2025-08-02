const express = require('express')
const cartController = require('./../controller/cartController')

const router = express.Router()

router.route('/getAll').get(cartController.getALLCart)

router.route('/getOne/:id').get(cartController.getOneCart)

router.route('/createOne').post(cartController.createCart)

router.route('/update/:id').patch(cartController.updateCart)

router.route('/delete').delete(cartController.deleteCart)

module.exports = router