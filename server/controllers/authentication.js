const User = require('../models/user');

//NEED VALIDATION!!!!!!

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(422).send({ error: 'An email and password must be provided! '});
  }
  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    //If user with email does exist, return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use!' });
    }

    //If unique user meail, cfreat and save a user record
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if(err) { return next(err); }

      //Respond to request indicating the user was created
      res.json({ success: true });
    });
  });
};