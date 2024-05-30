const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    
    if (!res.header('auth-token')) {
        return res.status(401).send('access denied!')    
    }

    try {
        const user = jwt.verify(req.header('auth-token'), process.env.JWT_SECRET)
        req.user = user
        console.log('here in verify user')
        console.log(user)
        next()
    }
    catch (error) {
        res.status(400).send('invalid token!')
    }
}


module.exports = verifyToken