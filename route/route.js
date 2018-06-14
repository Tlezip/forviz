var express = require('express')
const router = express.Router()
const search = require('../api/search')

router.get('/', (req, res) => {
    res.send('Hello, World!')
})

router.get('/search', search.searchAPI)

module.exports = router