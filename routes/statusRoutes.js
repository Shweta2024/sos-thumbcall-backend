const express = require('express')
const router = express.Router()
const {addStatus, updateStatus} =  require('../controllers/statusController')


router.post('/status', addStatus)

router.put('/status', updateStatus)


module.exports = router