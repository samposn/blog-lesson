/**
 * Created by Will WM. Zhang on 2015-11-02 上午10:12.
 */

"use strict";

var http = require('http');
var url = require('url');
var actionsRepos = {};
var session = require('./session');

actionsRepos['/add'] = require('./actions/add');
actionsRepos['/del'] = require('./actions/del');
actionsRepos['/update'] = require('./actions/update');
actionsRepos['/'] = require('./actions/index');
actionsRepos['/login'] = require('./actions/login');
actionsRepos['/logout'] = require('./actions/logout');
actionsRepos['/vnum'] = require('./utils/vnum');

http.createServer(function (request, response) {
    request.session = session(request, response);
    let pathname = url.parse(request.url).pathname;
    var action = actionsRepos[pathname];
    if (action) {
        action(request, response);
    }
    else {
        response.writeHead(404);
        response.end('File Not Found!');
    }
}).listen(8080);
