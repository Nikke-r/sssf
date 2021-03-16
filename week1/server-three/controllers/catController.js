'use strict';

const catModel = require('../models/catModel');

const cat_list_get = (req, res) => {
  res.json(catModel.cats);
}

const cat_get = (req, res) => {
  const foundCat = catModel.cats.find(cat => cat.id === req.params.id);
  res.json(foundCat);
}

const add_cat = (req, res) => {
  console.log(req.file);
  console.log(req.body);
}

module.exports = {
  cat_list_get,
  cat_get,
  add_cat
}
