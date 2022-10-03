const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/v1-3', require('./routes_v1-3')),
router.use('/v1-4', require('./routes_v1-4')),
router.use('/v1-5', require('./routes_v1-5')),
router.use('/v1-6', require('./routes_v1-6')),
router.use('/v1-7', require('./routes_v1-7'))


module.exports = router