require("dotenv").config();
const express = require('express')
const app = express()
const router = require('./routes')
const port = 3000
const mongoose = require("mongoose");

const url = process.env.MONGODB_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

app.listen(port, () => {
    console.log(`this app listening on port ${port}`)
})

module.exports = app