// -------------------------- IMPORT --------------------------------- //
const fs = require('fs');
const ytdl = require('youtube-dl')

app = {};

// -------------------------- METHODS --------------------------------- //

app.Download2Video = function(req, res) {

    let url = req.body.url;

    let video = ytdl(url, ['--format=18']);

    video.on('complete', function complete(info) {
        if (err) throw err;

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({info: info}));
    });
};


// -------------------------- EXPORT --------------------------------- //
module.exports = app
