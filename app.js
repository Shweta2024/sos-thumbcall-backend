require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const statusRoutes = require('./routes/statusRoutes')
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
app.use(statusRoutes)
app.use(userRoutes)

app.listen(PORT, (req, res) => {
    console.log(`Server started at Port: ${PORT}`)
})