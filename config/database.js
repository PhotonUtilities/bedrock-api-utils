const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://grant:toxS21WtXkZ1ieQR@cluster0.3op26.mongodb.net/';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
