const express = require('express')
const router = express.Router()
const { getPatientByEmail, getHospitalByEmail } = require('../controllers/userController')


router.post('/patient', getPatientByEmail)

router.post('/hospital', getHospitalByEmail)


module.exports = router
