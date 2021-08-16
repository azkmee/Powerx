const express = require('express');
const router = express.Router();

const logger = require('../public/logger.js')
const authentic = require('../public/authentic.js')

router.use('/', [logger, authentic]);

router.get('/', (req,res) => {
    res.status(200).send(`
    This is a hobbies page
    `)
})

module.exports = router;
