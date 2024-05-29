const express = require('express')
const addSettings = require('../controllers/settingsController')
const router = express.Router()

router.post('/settings', addSettings)

module.exports = router

