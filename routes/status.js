const express = require('express');
const router = express.Router();
const { REQUEST_KEY } = require('../config/keys');

router.get('/status', (req, res) => {
    if (req.headers.authorization !== REQUEST_KEY) {
        return res.status(401).send('Unauthorized');
    }
    res.status(200).json({ status: 200 })
});

module.exports = router;
