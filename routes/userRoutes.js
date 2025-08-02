const express = require('express')
const userController = require('./../controller/userController')

const router = express.Router()

router.route('/getAll').get(userController.getALLUser)

router.route('/getOne/:id').get(userController.getOneUser)

router.route('/createOne').post(userController.createUser)

router.route('/update/:id').patch(userController.updateUser)

router.route('/delete').delete(userController.deleteUser)

module.exports = router