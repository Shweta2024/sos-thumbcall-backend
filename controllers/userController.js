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
const getAllHospital = async() => {
    try {
        const hospitalList = await Hospital.find
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
const getPatientByID = async(userID) => {
    try {
        const patient = await PatientSettings.findOne({ userID: userID })
        return patient
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


// Function to get hospital details by user ID
const getHospitalByID = async(userID) => {
    try {
        const hospital = await HospitalSettings.findOne({ userID: userID })
        return hospital
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


module.exports = {
    getAllPatient,
    getAllHospital,
    getAllHospitalAddress,
    getPatientByID,
    getHospitalByID
}