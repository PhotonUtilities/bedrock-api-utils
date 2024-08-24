const express = require('express');
const router = express.Router();
const { setScore } = require('../controllers/scoreController');
const { KEY } = require('../config/keys');

router.post('/setscore', (req, res) => {
    if (req.headers.authorization !== KEY) {
        return res.status(401).send('Unauthorized');
    }
    setScore(req, res);
});

module.exports = router;

