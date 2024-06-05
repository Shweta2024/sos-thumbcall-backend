const jwt = require('jsonwebtoken')


// Middleware function to verify the JWT token
const verifyToken = (req, res, next) => {
    
    // Check if the auth-token header is present in the request
    if (!res.header('auth-token')) {
        return res.status(401).json({ sucess: false })
    }

    try {
        // Verify the token using the secret key add attach user to req object
        const user = jwt.verify(req.header('auth-token'), process.env.JWT_SECRET)
        req.user = user
        next()
    }
    catch (error) {
        res.status(400).json({ sucess: false })
    }
}


module.exports = verifyToken