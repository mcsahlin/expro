const express = require('express');
const router = express.Router();
const {handleLogin, handleSignup} = require("../services/userService");

router.post('/', handleSignup);
router.post('/login', handleLogin);

module.exports = router;