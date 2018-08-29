module.exports = {
    'action-change-song' : {
        'js': require('./action-change-song.js.ejs'),
    },
    'action-start-song' : {
        'js': require('./action-start-song.js.ejs'),
    },
    'action-stop-song' : {
        'js': require('./action-stop-song.js.ejs'),
    },
    'details-player-playing' : {
        'html': require('./c-details-player.html.ejs'),
    },
    'details-player-stopped' : {
        'html': require('./c-details-player.html.ejs'),
    },
    'list-songs' : {
        'html': require('./c-list-songs.html.ejs'),
    },
    'gulpfile' : {
        'js': require('./gulpfile.js.ejs'),
    },
    'index' : {
        'html': require('./index.html.ejs'),
        'js': require('./index.js.ejs'),
    },
    'mediaplayer' : {
        'js': require('./mediaplayer.js.ejs'),
    },
    'package' : {
        'json': require('./package.json.ejs'),
    },
    'songs' : {
        'js': require('./repo-songs.js.ejs'),
    },
}
