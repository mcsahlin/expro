const express = require('express');
const router = express.Router();
const UsersContr = require('../controllers/usersContr');

router.post('/', UsersContr.signupUser);
router.get('/', UsersContr.getUsers);
router.get('/:id', UsersContr.getUser);
router.post('/login', UsersContr.loginUser);
router.patch('/:id', UsersContr.updateUser);

module.exports = router;