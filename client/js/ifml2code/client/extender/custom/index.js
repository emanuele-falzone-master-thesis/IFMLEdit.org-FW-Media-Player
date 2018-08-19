module.exports = {
    'action-read-card' : {
        'js': require('./action-read-card.js.ejs'),
    },
    'action-update-level-1' : {
        'js': require('./action-update-level-1.js.ejs'),
    },
    'main' : {
        'css': require('./main.css.ejs'),
    },
    'index' : {
        'html': require('./index.html.ejs'),
    },
    'gulpfile' : {
        'js': require('./gulpfile.js.ejs'),
    },
    'answers' : {
        'js': require('./answers.js.ejs'),
        'jsos': require('./answers.json.ejs'),
    },
    'questions' : {
        'js': require('./questions.js.ejs'),
        'jsos': require('./questions.json.ejs'),
    },
}
