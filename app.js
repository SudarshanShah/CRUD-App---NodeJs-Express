const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Alien'

// creating Express application
const app = express()

// connecting with MongoDB
mongoose.connect(url, {useNewurlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

// telling Express to take the json
app.use(express.json())

// to get hold of router to route all requests with '/aliens' to specified file
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

// to run Express at port 9000
app.listen(9000, () => {
    console.log('Server started')
})