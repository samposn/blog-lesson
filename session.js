/**
 * Created by Will WM. Zhang on 2015-11-04 上午11:55.
 */

var querystring = require('querystring');
var cache = {};
var sid = 0;

module.exports = function (req, res) {
    var cookie = req.headers.cookie;
    var cookieJSONObj = {};

    if (cookie) {
        cookieJSONObj = querystring.parse(cookie.split(';').join('&'));
    }

    if (cookieJSONObj.sid && cache[cookieJSONObj.sid]) {
        return cache[cookieJSONObj.sid];
    }
    else {
        sid += 1;
        res.setHeader('Set-Cookie', [`sid=${sid}`]);
        return cache[sid] = {};
    }

};
