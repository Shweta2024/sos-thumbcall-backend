const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// function to check if user exists 
const userExists = async(userEmail) => {
    const user = await User.findOne({ email: userEmail })
    return user
}


const registerUser = async(req, res) => {
    try {
        const { role, name, email, phoneNo, password } = req.body
        const isUserPresent = await userExists(email)
        
        // check if user already exists
        if (isUserPresent) {
            res.status(400).send('message: user already exists!')
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = new User({
            role,
            name,
            email,
            phoneNo,
            password: hashedPassword
        })

        await user.save()
        res.status(200).send({
            "id": user._id,
            "name": user.name
        })
    }
    catch (error) {
        res.status(400).send(error)
    }
    
}


const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await userExists(email)

        if (!user) {
            res.status(400).send('message: user not found!')
        }

        const verifyUser = await bcrypt.compare(password, user.password)

        if (!verifyUser) {
            res.status(400).send('message: incorrect password!')
        }

        const token = jwt.sign({
            id: user._id,
            role: user.role,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET)
        
        res.header('auth-token', token)
        console.log(token)
        res.status(200).send(`${user.name} logged in!`)
    }
    catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {
    registerUser,
    loginUser
}
