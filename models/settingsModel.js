const mongoose = require('mongoose')

const settingsSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // reference of the user model
    },
    role: {
        type: String
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
        type: String
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Settings', settingsSchema)