const catchAsync = require('./../utils/catchAsync')
const appError = require('./../utils/appError')

exports.getOne = Model => 
    catchAsync( async (req, res, next) => {
        const doc = await Model.findById(req.params.id)

        if (!doc) {
            return next(new appError('No data with that id'), 404)
        }

        res.status(200).json({
            status : 'success',
            data : {
                data : doc
            }
        })
    })

exports.getAll = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.find({})

        if (!doc) {
            return next(new appError('No data found'),404)
        }

        res.status(200).json({
            status : 'success',
            data : {
                data : doc
            }
        })
    })    

exports.createOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body)

        if (!doc) {
            return next(new appError('No data added'),404)
        }

        res.status(200).json({
            status : 'success',
            data : {
                data : doc
            }
        })
    })  

exports.updateOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators : true
        })

        if (!doc) {
            return next(new appError('No data updated'),404)
        }

        res.status(200).json({
            status : 'success',
            data : {
                data : doc
            }
        })
    })  

exports.deleteOne = Model => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id)

        if (!doc) {
            return next(new appError('No data delete'),404)
        }

        res.status(200).json({
            status : 'success',
            data : {
                data : doc
            }
        })
    }) 