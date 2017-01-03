const User = require('../models/user');

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {

  });
  //If user with email does exist, return error

  //If unique user meail, cfreat and save a user record

  //Respond to request indicating the user was created
};