const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/v4', require('./routes_v4'))
module.exports = router
