const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./route/route')
app.use('/', router)
// app.get('/', (req, res) => {
//     res.send('Hello, World!')
//     })
var server = app.listen(8080, function() {
    console.log('Express is running on port 8080.');
});