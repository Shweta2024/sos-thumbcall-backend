const express = require('express')
const addSettings = require('../controllers/settingsController')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router()


router.post('/settings', verifyToken, addSettings)

module.exports = router

