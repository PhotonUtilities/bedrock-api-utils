const express = require('express');
const router = express.Router();
const { getPlayers } = require('../controllers/playerController');
const { REQUEST_KEY } = require('../config/keys');

router.get('/getplayers', (req, res) => {
    if (req.headers.authorization !== REQUEST_KEY) {
        return res.status(401).send('Unauthorized');
    }
    getPlayers(req, res);
});

module.exports = router;
