const HospitalSettings = require('../models/hospitalSettingsModel')
const PatientSettings = require('../models/patientSettingsModel')


const addSettings = async(req, res) => {
    try {

        if(req.user.role === 'Patient'){
            const settings = new PatientSettings ({
            userID: req.user.id,
            email: req.user.email,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            country: req.body.country,
            phoneType: req.body.phoneType,
            defaultPhoneNo: req.body.defaultPhoneNo,
            emergencyPreference: req.body.emergencyPreference
            })

            settings.save()
            res.status(200).json({ sucess: true })
        }
        else {
            const settings = new HospitalSettings({
                userID: req.user.id,
                email: req.user.email,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode,
                country: req.body.country,
                phoneType: req.body.phoneType,
                defaultPhoneNo: req.body.defaultPhoneNo,
            })

            settings.save()
            res.status(200).json({ sucess: true })     
        }
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}

const updateSettings = async (req, res) => {
    try {
        const userID = req.user.id

        if (req.user.role === 'Patient') {
            const updatedAddress = await PatientSettings.findOneAndUpdate(
                { userID: userID },
                req.body,
                { new: true }
            )
        } else {
            const updatedAddress = await HospitalSettings.findOneAndUpdate(
                { userID: userID },
                req.body,
                { new: true }
            )
        }
        res.status(200).json({ sucess: true })
    } catch (err) {
        res.status(400).json({ sucess: false })
    }
}


module.exports = {
    addSettings,
    updateSettings
}