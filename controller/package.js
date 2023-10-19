const Package = require('../models/package')

    exports.createPackage = async (req, res) => {
        try{
            const dataPackage = req.body
            const createPackage = await Package.create(dataPackage)
            console.log(createPackage)
            res.json({
                statusCode: 200,
                data: createPackage,
                message: 'Data created'
            })
        }catch (error) {
            res.json({
                message: error.message
            })
        }

    }

    exports.showPackageById = async (req, res) => {
        try{
            const showPackage = await Package.findOne({_id: req.params.id})

            if(!showPackage) {
                res.json({
                    message: 'data not found'
                })
                return
            }
            res.json({
                statusCode: 200,
                data: showPackage
            })
        }catch (error) {
            res.json({
                message: error.message
            })
        }
    }

    exports.updateDataPackage = async (req, res) => {
        try{
            const updatePackage = await Package.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false})

            if(!updatePackage) {
                res.json({
                    statusCode: 500,
                    message: 'Update failed'
                })
                return
            }
            res.json({
                statusCode: 200,
                data: updatePackage,
                message: 'Update success'
            })
        }catch (error) {
            res.json({
                message: error.message
            })
        }
    }

    exports.showAllPackage = async (req, res) => {
        try{
            const showPackage = await Package.find()

            res.json({
                statusCode: 200,
                data: showPackage
            })
        }catch (error) {
            res.json({
                message: error.message
            })
        }
    }

    exports.deletePackage = async (req, res) => {
        try{
            const showPackage = await Package.findOne({_id: req.params.id})

            if(!showPackage) {
                res.json({
                    message: 'data not found'
                })
                return
            }

            const deletePackage = Package.deleteOne({_id: req.params.id})
            res.json({
                statusCode: 200,
                message: 'Data deleted'
            })
        }catch (error) {
            res.json({
                message: error.message
            })
        }
    }