const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce_api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to database');
});

module.exports = db;