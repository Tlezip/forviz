const express = require('express')
require('dotenv').config()
const app = express()
app.get('/', (req, res) => {
    res.send('Hello, World!')
    })
var server = app.listen(8080, function() {
    console.log('Express is running on port 8080.');
});