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
    'authors' : {
        'js': require('./repo-songs.js.ejs'),
    },
    'bootstrap' : {
        'css': require('./bootstrap.css.ejs'),
    },
    'system-event-end' : {
        'js': require('./system-event-end.js.ejs'),
        'html': require('./system-event-end.html.ejs'),
    },
    'list-authors' : {
        'html': require('./c-list-authors.html.ejs'),
    },
    'view-container-application' : {
        'html': require('./c-view-container-application.html.ejs'),
    },
}
