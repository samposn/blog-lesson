/**
 * Created by Will WM. Zhang on 2015-11-03 上午1:53.
 */

"use strict";

var querystring = require('querystring');
var url = require('url');

module.exports = function query(req) {
    let query = url.parse(req.url).query;
    return querystring.parse(query);
};

