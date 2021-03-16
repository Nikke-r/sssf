'use strict';

const express = require('express');
const { user_list_get, get_user, add_user } = require('../controllers/userController');
const router = express.Router();

router.get('/', user_list_get);
router.get('/:id', get_user);
router.post('/', add_user);

module.exports = router;