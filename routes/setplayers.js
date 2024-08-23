const express = require('express');
const router = express.Router();
const { setPlayers } = require('../controllers/playerController');
const { KEY } = require('../config/keys');

router.post('/setplayers', (req, res) => {
    if (req.headers.authorization !== KEY) {
        return res.status(401).send('Unauthorized');
    }
    setPlayers(req, res);
});

module.exports = router;
