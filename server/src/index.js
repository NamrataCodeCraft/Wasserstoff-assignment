const express = require('express')
const mongoose = require('mongoose')
const route = require('./router/route')
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://namrata:namrata@cluster0.ywxeums.mongodb.net/wasserstoffAssignment')
    .then(() => {
        console.log('mongoDB is connected')
    }).catch((err) => {
        console.log(err)
    })
app.use('/', route)

app.listen(process.env.port || 3003, () => {
    console.log('express app is running on port 3003')
})

