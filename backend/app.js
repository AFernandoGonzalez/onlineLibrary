require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');
const { connection } = require('./src/db/db');
const app = express();


const PORT = process.env.PORT || 8000;
connection;
// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('My Library API ');
});

app.use('/api', bookRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
