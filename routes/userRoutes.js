const express = require('express')
const router = express.Router()
const { getPatientByEmail, getHospitalByEmail } = require('../controllers/userController')


router.get('/patient', getPatientByEmail)

router.get('/hospital', getHospitalByEmail)


module.exports = router