const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const routes=require('./routes/index')
const app = express()

//midlware use here

app.use("/",routes.router)
app.use(morgan())

//connection to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true }).then(() => console.log("DB connected"))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})
    //create a server
    const port = 5000
    app.listen(port, (req, res) => {
        console.log("we connected a server ",port)
    })