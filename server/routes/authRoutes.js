const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');

router.post('/register', UserService.register);
router.post('/login', UserService.login);

module.exports = router;