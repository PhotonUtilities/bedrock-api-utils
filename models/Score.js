const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    stats: { type: Map, of: Number, default: {} },
});

module.exports = mongoose.model('Score', scoreSchema);
