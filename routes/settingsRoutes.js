const express = require('express')
const {addSettings, updateSettings} = require('../controllers/settingsController')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router()


router.post('/settings', verifyToken, addSettings)

router.put('/settings', verifyToken, updateSettings)

module.exports = router

