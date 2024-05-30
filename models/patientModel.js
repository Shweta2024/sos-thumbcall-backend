const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    phoneNo: {
        type: String,
        required: [true, 'Please enter your phone number']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Patient', patientSchema)