const mongoose = require('mongoose')


const statusSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Status', statusSchema)