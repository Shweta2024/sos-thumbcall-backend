const Patient = require('../models/patientModel')
const Hospital = require('../models/hospitalModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// function to check if already registered 
const userExists = async (userEmail, role) => {
    let user
    if (role === 'Patient'){
        user = await Patient.findOne({ email: userEmail })
    }
    else {
        user = await Hospital.findOne({email: userEmail})
    }
    return user
}


const registerUser = async(req, res) => {
    try {
        const isUserPresent = await userExists(req.body.email, req.body.role)

        // check if user already exists
        if (isUserPresent) {
            res.status(400).json({ sucess: false })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const registerDetails = {
            role: req.body.role,
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: hashedPassword,
        }
        
        if (req.body.role === 'Patient') {
            const user = new Patient(registerDetails)
            await user.save()
        }
        else {
            const user = new Hospital(registerDetails)
            user.save()
        }

        res.status(200).json({ sucess: true })
    }
    catch (error) {
        res.status(400).json({ sucess: false, error: error })
    }
    
}


const loginUser = async(req, res) => {
    try {
        const { role, email, password } = req.body
        const user = await userExists(email, role)

        if (!user) {
            res.status(400).json({ sucess: false })
        }

        const verifyUser = await bcrypt.compare(password, user.password)

        if (!verifyUser) {
            res.status(400).json({ sucess: false})
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET)
        
        res.header('auth-token', token)
        res.status(200).json({ sucess: true, token: token })
    }
    catch (error) {
        res.status(400).json({ sucess: false, error: error })
    }
}


module.exports = {
    registerUser,
    loginUser
}
