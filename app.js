const express = require('express');
const connectDB = require('./config/database');
const setScoreRoute = require('./routes/setscore');
const setPlayersRoute = require('./routes/setplayers');
const getPlayersRoute = require('./routes/getplayers');
const getScoreRoute = require('./routes/getscore');
const statusRoute = require('./routes/status');

const app = express();

app.use(express.json());

connectDB();

app.use('/api', setScoreRoute);
app.use('/api', setPlayersRoute);
app.use('/api', getPlayersRoute);
app.use('/api', getScoreRoute);
app.use('/api', statusRoute);

const { red, yellow } = require('colors');
const { KEY, REQUEST_KEY } = require('./config/keys');

console.log('Ensure to place the \'Private key\' in the pack. Your stats will not be updated without it.\n\nKey info: \n  Private: ONLY USE IN THE PACK OR BOT\n  Request: Only give out to trusted developers for your server, can be used to exceed bandwidth usage\n\nKeys:\n  Private: ' + red(KEY) + '\n  Request: ' + yellow(REQUEST_KEY) + '\n');

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

process.on(`beforeExit`, () => {
    app.delete();
});

