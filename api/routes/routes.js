const express = require('express');
const router = express.Router();

// -------------------------- IMPORT --------------------------------- //

const audio = require('../src/controllers/audio')
const video = require('../src/controllers/video')


// -------------------------- ROUTES --------------------------------- //

// URL

router.post('/controllers/download-to-audio/', (req, res) => {
    audio.Download2Audio(req, res);
});

router.post('/controllers/download-to-video/', (req, res) => {
    video.Download2Video(req, res);
});


// -------------------------- EXPORT --------------------------------- //

module.exports = router;
