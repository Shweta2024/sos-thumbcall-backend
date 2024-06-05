const mongoose = require('mongoose')


const patientSettingsSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient' // reference of the user model
    },
    email: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: [true, 'Please enter your address']
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'Please enter your city']
    },
    state: {
        type: String,
        required: [true, 'Please enter your state']
    },
    pincode: {
        type: String,
        required: [true, 'Please enter your pincode']
    },
    country: {
        type: String,
        required: [true, 'Please enter your country']
    },
    phoneType: {
        type: String,
        required: true
    },
    defaultPhoneNo: {
        type: String,
        required: true
    },
    emergencyPreference: {
        type: String,
        required: true,
        default: 'buttonClick'
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('PatientSetting', patientSettingsSchema)