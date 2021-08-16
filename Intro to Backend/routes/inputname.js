const express = require('express');
const router = express.Router();
const submit_name = require('../public/namechecker');

router.use(express.urlencoded({extended:false}))
router.use('/', submit_name)

router.post('/', (req,res) => {
    // console.log(req.body.name)
    const user = req.body.name
    
    if (user) {
        res.send(`Welcome ${user}!`)
    }
    else {
        res.status(401).send(`
        Please enter a name
        <div> Return to <a href='/'>home</a></div>`)
    }
})

module.exports = router;
