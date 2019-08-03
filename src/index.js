const express = require('express');
const path = require('path');
const router = require('./routes/index');

// Init
const app = express();

// Settings
app.set('port', process.env.PORT || 3000); // Establecer puerto dinamico
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', router); // Home

// Server ON
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});
