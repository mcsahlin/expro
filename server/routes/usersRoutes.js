const express = require('express');
const router = express.Router();
const UsersContr = require('../controllers/usersContr');

router.post('/signup', UsersContr.signupUser);
router.get('/:id', UsersContr.getUser);
router.patch('/:id', UsersContr.updateUser);

module.exports = router;