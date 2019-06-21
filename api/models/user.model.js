const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "Username is required",
        minlength: 5
    } ,
    password: {
        type: String,
        required: "Password is required",
        minlength: 5
    } ,
    email: {
        type: String,
        required: "Email is required",
        minlength: 5
    }
})

module.exports = mongoose.model('user',userSchema);