const express = require('express');
const router = express.Router();
const ChallengesContr = require('../controllers/challengesContr');

router.post('/create', ChallengesContr.createTarget);
router.get('/:id', ChallengesContr.getTarget);
router.patch('/:id', ChallengesContr.updateTarget);
router.delete('/:id', ChallengesContr.deleteTarget);

module.exports = router;