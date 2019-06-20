getAuth =  (req, res)=> {
    const users =
    {
        id: 1,
        username: 'Test@test',
        password: 'test',
        firstName: 'Manoj',
        lastName: 'User'
    };
    if (req.body.username == users.username && req.body.password == users.password) {
        const user = users.firstName;
        res.status(200).send(user);
    }
    else {
        res.status(404).send(null);
    }
}

module.exports = getAuth;