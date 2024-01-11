const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');
const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', bookRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
