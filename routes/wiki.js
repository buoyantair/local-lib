const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Wiki home page')
})

router.get('/about', function(req, res) {
    res.send('about this wiki')
})

module.exports = router;