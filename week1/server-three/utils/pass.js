'use strict';

const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const { getUserLogin } = require('../models/userModel');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new Strategy(
  async (username, password, done) => {
    try {
      const user = getUserLogin(username);

      if (user === undefined) return done(null, false, { message: 'User not found' });
      if (user.password !== password) return done(null, false, { message: 'Incorrect password' });

      delete user.password;

      return done(null, { ...user }, { message: 'Login successfilly '});
    } catch (error) {
      return done(error);
    }
  }
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jee'
}, (jwtPayload, done) => {
  
  const user = getUserLogin(jwtPayload.email);
  if (!user) return done('User not found');

  return done(null, user);
}));

module.exports = passport;