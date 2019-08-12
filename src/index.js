require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes/index');

// Init
const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', router); // Home

// Server ON
const PORT = parseInt(process.env.PORT);

if (PORT == 80) {
    app.listen(PORT, 'db-dicabeg.test', () => {
        console.log(`Server on port ${PORT}`)
    });
} else app.listen(PORT);
