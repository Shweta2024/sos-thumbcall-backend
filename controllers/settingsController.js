const HospitalSettings = require('../models/hospitalSettingsModel')
const PatientSettings = require('../models/patientSettingsModel')


const addSettings = async(req, res) => {
    try {

        if(req.user.role === 'Patient'){
            const settings = new PatientSettings ({
            userID: req.user.id,
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
            res.status(200).send('patient settings details saved!')
        }
        else {
            const settings = new HospitalSettings({
                userID: req.user.id,
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
            res.status(200).send('hospitals settings details saved!')       
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


module.exports = addSettings