const express = require('express')
const app = express()

const misc = require('../routes/misc')
const username = require('../routes/inputname')
const hobbies = require('../routes/hobbies')


app.use(misc)
app.use('/hobbies', hobbies);
app.use('/login', username)

app.all('*', (req, res) => {
    res.status(404).send(`
    This page does not exist
    <div> Return to <a href='/'>home</a></div>`)
})

app.listen(5000, ()=>{
    console.log('Server is listening.')
})