const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const authRoutes = require('./routes/authRoutes')
const settingsRoutes = require('./routes/settingsRoutes')

const app = express()

// middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(authRoutes)
app.use(settingsRoutes)

app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})