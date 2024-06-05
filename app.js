require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const settingsRoutes = require('./routes/settingsRoutes')
const PORT = process.env.PORT || 5000


const app = express()


app.use(cors()) 


// middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


// connect to db
mongoose.connect(process.env.DB_CONNECTION_STRING)


// routes
app.use(authRoutes)
app.use(settingsRoutes)


app.listen(PORT, (req, res) => {
    console.log(`Server started at port: ${PORT}`)
})