const mongoose = require('mongoose');

// should look like this mongodb+srv://<username>:<Database-password>@cluster0.3op26.mongodb.net/
const MONGO_URI = 'uri_goes_here';

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
