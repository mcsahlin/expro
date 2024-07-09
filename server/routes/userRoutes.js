const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userContr');

router.post('/signup', UserController.signupUser);
router.get('/:id', UserController.getUser);
router.patch('/:id', UserController.updateUser);

module.exports = router;