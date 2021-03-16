'use strict';

const userModel = require('../models/userModel');

const user_list_get = (req, res) => {
  const publicUsers = userModel.users.map(user => {
    delete user.password;
    return user;
  });

  res.json(publicUsers);
}

const get_user = (req, res) => {
  const foundUser = userModel.users.find(user => user.id === req.params.id);

  delete foundUser.password;

  res.json(foundUser);
}

const add_user = (req, res) => {
  console.log(req.body);
}

module.exports = {
  user_list_get,
  get_user,
  add_user,
}