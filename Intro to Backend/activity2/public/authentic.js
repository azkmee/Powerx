const authentic = (req, res, next) => {
    const { user } = req.query
    if (user === '007'){
        console.log(req.query)
        req.user = {name: 'James' , id: '007'}
        console.log('authorized')
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authentic;