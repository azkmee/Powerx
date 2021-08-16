const express = require('express');
const router = express.Router();
const path = require('path')


router.use(express.urlencoded({extended:false}))
router.use(express.static('../public'));

router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})

router.get('/about', (req,res) => {
    res.status(404).send(`
    This is an about page
    `)
})




module.exports = router;
