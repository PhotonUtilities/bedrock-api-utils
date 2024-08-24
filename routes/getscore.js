const express = require('express');
const router = express.Router();
const { getScore } = require('../controllers/scoreController');

router.get('/getscore', getScore);

module.exports = router;
