const express = require('express')
const router = express.Router()
const packageRouter = require('./package')

router.use('/package', packageRouter)

module.exports = router