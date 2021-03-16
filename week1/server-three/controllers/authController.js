'use strict';
const passport = require('passport');
const jwt = require('jsonwebtoken');

const login = (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', { session: false}, (error, user, info) => {
    console.log('user:', user);
    console.log('error:', error);
    if (error || !user) {
      return res.status(400).json({ message: 'Something went wrong ', user });
    }

    req.login(user, { session: false }, (error) => {
      if (error) res.send(error);

      const token = jwt.sign(user, 'jee');
      return res.json({ user, token });
    });
  })(req, res);
}

module.exports = {
  login,
}