exports.getAuth = (req, res) => {
    console.log('username ', req.body.username);
    console.log('password ', req.body.password);
    res.status(200).json({
        username: req.body.username,
        password: req.body.password
    })
}

