const fs = require('fs');
const ytdl = require('youtube-dl')

app = {};

// -------------------------- METHODS --------------------------------- //

app.Download2Audio = function(req, res) {

    ytdl.getInfo(req.body.url, function(err, info) {

        if (err) { throw err }

        ytdl.exec(req.body.url, ['-x', '--audio-format', req.body.format], {'cwd': 'downloads'}, function(err) {
            if (err) {throw err};

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({info: info}));
        });
    });
};


// -------------------------- EXPORT --------------------------------- //

module.exports = app
