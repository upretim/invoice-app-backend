const users = require('../models/user.model');
exports.getAuth = (req, res) => {
    console.log('username ', req.body.username);
    console.log('password ', req.body.password);
    const usersList = users.findOne({ 
        email: req.body.email,
        password:  req.body.password
    })
    .then(usersList=>{
        if( usersList == null || usersList.length===0){
            res.status(404).json({
                     resp: "No data found for user"
                 })
        }
        else{
            res.status(200).json({username:usersList.username});
        }
        console.log('user from db ', usersList);
    })
    .catch(error=>{
        res.status(404).json({
            resp: "Internal server error"
        })
        console.log('Error ', error);
    })
}

