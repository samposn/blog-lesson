/**
 * Created by Will WM. Zhang on 2015-11-03 下午1:54.
 */

"use strict";

var query = require('./query');
var post = require('./post');

module.exports = function getId(req, callback) {
    if (req.method === 'GET') {
        var data = query(req);
        callback(data.id);
    }
    else {
        post(req).then(function (data) {
            callback(data.id);
        });
    }
};