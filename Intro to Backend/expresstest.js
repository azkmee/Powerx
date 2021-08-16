const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log('User reaches the server')
    res.send('This is my homepage')
})

app.all('*', (req, res) => {
    res.status(404).send(`
    This page does not exist
    <div> Return to <a href='/'>home</a></div>`)
})

app.listen(5000, ()=>{
    console.log('Server is listening.')
})