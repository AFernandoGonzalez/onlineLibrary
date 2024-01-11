const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME_DEV}?retryWrites=true&w=majority`;

// Check MongoDB connection
exports.connection = mongoose.connect(URI)
    .then(() => {
        console.log('DB Connected!')
    })
    .catch((error) => {
        console.log('Cannot connect to DB', error)
    })
