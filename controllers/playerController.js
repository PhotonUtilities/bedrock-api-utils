let playerList = [];

exports.setPlayers = (req, res) => {
    try {
        playerList = req.body;
        console.log(JSON.stringify(playerList, null, 4));
        res.status(200).send('Player list updated');
    } catch (err) {
        console.error('Request error:', err.message);
        res.status(400).send('Invalid key, request format, or data');
    }
};

exports.getPlayers = (req, res) => {
    res.status(200).json(playerList);
};
