// Get dependencies
const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/routes');

// Ports debug
const port = process.env.PORT || 8080;

// Express App
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// -------------------------- ROUTES --------------------------------- //

// API
app.use('/api/', api);

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/src/index.html'));
});

// -------------------------- HTTP SERVER --------------------------------- //

// Assign port
app.set('port', port);

// HTTP server
const server = http.createServer(app);

// Create connection
server.listen(port, console.log("Server running on http mode: " + port));