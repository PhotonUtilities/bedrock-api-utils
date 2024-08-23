const Score = require('../models/Score');

exports.setScore = async (req, res) => {
    const { name, stats } = req.body;

    try {
        const update = { $set: { stats } };
        const options = { upsert: true, new: true };
        await Score.findOneAndUpdate({ name }, update, options);

        res.status(200).send('Score saved successfully');
    } catch (err) {
        console.error('Database error:', err.message);
        res.status(500).send('Database error');
    }
};

exports.getScore = async (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Name parameter missing');
    }

    try {
        const score = await Score.findOne({ name });

        if (!score) {
            return res.status(404).send('Score not found');
        }

        res.status(200).json({ name: score.name, stats: score.stats }, null, 4);
    } catch (err) {
        console.error('Database error:', err.message);
        res.status(500).send('Database error');
    }
};
