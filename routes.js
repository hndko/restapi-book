'use strict';

module.exports = function(app){
    var jsonbook = require('./controller');

    app.route('/').get(jsonbook.index);
    app.route('/show-book').get(jsonbook.tampilData);
}