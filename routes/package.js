const express = require('express')
const router = express.Router()
const packageController = require('../controller/package')

router.get('/', packageController.showAllPackage)
router.post('/', packageController.createPackage)
router.get('/:id', packageController.showPackageById)
router.put('/:id', packageController.updateDataPackage)
router.patch('/:id', packageController.updateDataPackage)
router.delete('/:id', packageController.deletePackage)

module.exports = router