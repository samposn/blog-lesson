/**
 * Created by Will WM. Zhang on 2015-11-03 上午1:27.
 */

"use strict";

var querystring = require('querystring');

module.exports = function(req) {

    return new Promise(function(resolve, reject){
        let result = '';
        let jsonObj;

        req.on('data', function (chuck) {
            result += chuck;
        });

        req.on('end', function () {
            jsonObj = querystring.parse(result);
            resolve(jsonObj);
        });
    });

};