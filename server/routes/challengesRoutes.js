const express = require('express');
const router = express.Router();
const ChallengesContr = require('../controllers/challengesContr');

router.post('/create', ChallengesContr.createChallenge);
router.get('/:id', ChallengesContr.getChallenge);
router.patch('/:id', ChallengesContr.updateChallenge);
router.delete('/:id', ChallengesContr.deleteChallenge);

module.exports = router;