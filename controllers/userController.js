const Patient = require('../models/patientModel')
const Hospital = require('../models/hospitalModel')
const PatientSettings = require('../models/patientSettingsModel')
const HospitalSettings = require('../models/hospitalSettingsModel')


// Function to get all patients
const getAllPatient = async() => {
    try {
        const patientList = await Patient.find()
        return patientList
    }
    catch(error) {
        res.status(400).json({ sucess: false })
    }
}


// Function to get all hospitals
const getAllHospital = async(req, res) => {
    try {
        const hospitalList = await Hospital.find()
        return hospitalList
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


// Function to get all hospital addresses
const getAllHospitalAddress = async() => {
    try {
        const hospitalAddressList = await HospitalSettings.find()
        return hospitalAddressList
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


// Function to get patient details by user ID
const getPatientByEmail = async(req, res) => {
    try {
        const email = req.body.email
        const user = await Patient.findOne({ email: email })
        const settings = await PatientSettings.findOne({ email: email })
        if (!user) {
            res.status(400).json({sucess: false})
        }
        res.status(200).json({sucess: true, user: user, settings: settings}) 
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


// Function to get hospital details by user ID
const getHospitalByEmail = async(req, res) => {
    try {
        const email = req.body.email
        const user = await Hospital.findOne({ email: email })
        const settings = await HospitalSettings.findOne({ email: email })
        if (!user) {
            res.status(400).json({sucess: false})
        }
        res.status(200).json({ sucess: true, user: user, settings: settings })
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


getNearestHospital = async(email) => {
    const user = await PatientSettings.findOne({ email: email })

    if (!user) {
        res.json({sucess: false})    
    }

    const { pincode, city, state } = user
    console.log(pincode)
    let nearestHostpital = await HospitalSettings.find({ pincode: pincode })
    if (nearestHostpital.length == 0) {
        nearestHostpital = await HospitalSettings.find({ city: city })
    }
    if (nearestHostpital.length == 0) {
        nearestHostpital = await HospitalSettings.find({ state: state })
    }
    const randomIndex = Math.floor(Math.random() * nearestHostpital.length)
    console.log(nearestHostpital[randomIndex])
    
    return nearestHostpital[randomIndex]
}


module.exports = {
    getAllPatient,
    getAllHospital,
    getAllHospitalAddress,
    getPatientByEmail,
    getHospitalByEmail,
    getNearestHospital
}