const express = require('express');
const router = express.Router();
const TargetsContr = require('../controllers/targetsContr');

router.post('/create', TargetsContr.createTarget);
router.get('/:id', TargetsContr.getTarget);
router.patch('/:id', TargetsContr.updateTarget);
router.delete('/:id', TargetsContr.deleteTarget);

module.exports = router;