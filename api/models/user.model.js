const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
  }, {collection : 'users' });

  var user = mongoose.model('user', UserSchema);

  module.exports = user;
