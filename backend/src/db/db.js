const mongoose = require('mongoose');

URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME_DEV}?retryWrites=true&w=majority`

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookstore');

// Check MongoDB connection
const connect = mongoose.connection;

try {
    connect.on('open', () => {
        console.log('Connected to MongoDB');
    });
} catch (error) {
    console.log('Error: ' + error);
}