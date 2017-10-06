const fs = require('fs');
const ytdl = require('youtube-dl')

app = {};

// -------------------------- METHODS --------------------------------- //

app.Download2Audio = function(req, res) {

    ytdl.getInfo(req.body.url, function(err, info) {

        'use strict';
        if (err) { throw err; }

        ytdl.exec(req.body.url, ['-x', '--audio-format', req.body.format], {}, function(err, output) {
            if (err) throw err;

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({info: info}));
        });
    });
};


// -------------------------- EXPORT --------------------------------- //

module.exports = app
