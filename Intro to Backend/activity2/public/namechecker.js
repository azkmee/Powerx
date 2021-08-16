const namechecker = (req, res, next) => {
    const user = req.body.name
    if (user) {
        // console.log(user)
        req.user = user
        next()
    } else {
        res.status(401).send('Please provide a name')
    }
};

module.exports = namechecker;