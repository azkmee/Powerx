const {Pool} = require('pg');
const connectionInfo = `postgres://postgres:pw@localhost:5432/activity5`
const pool = new Pool({connectionString: connectionInfo})

const express = require('express');
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
 }));


//middleware
const attemptLogin = (req, res, next) => {

    const { username, password } = req.body
    pool.query(
        `SELECT * from loginids
        WHERE login = $1 AND password = $2`,
        [username, password],
        (err, result) => {
            console.log(result);
            if (result.rowCount == 1) {next()}
            else {
                res.redirect('/')
            }

        }
    )
}


app.get('/', (req, res) => {
    console.log('User reaches the server')
    res.sendFile(__dirname + '/activity5.html')
})

app.post('/login', attemptLogin, (req,res) => {
    res.send('Login success')
    console.log('reached main')
})

app.listen(5000, ()=> {console.log('server is listening')})

// lgioani0
// WJDln5
