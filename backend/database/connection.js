const mongoose = require('mongoose')

const mongo_url = 'mongodb://127.0.0.1:27017/vNotes';

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;