/**
 * Created by Will WM. Zhang on 2015-11-02 上午11:32.
 */

"use strict";

var database = require('../database');
var AddPager = require('../views/AddPager');
var post = require('../utils/post');
var IndexPage = require('../views/IndexPager');
var loginAction = require('./login');

module.exports = function (req, res) {

    if (!req.session.isLogin) {
        loginAction(req, res);
        return;
    }

    var errors = {};
    if (req.method === 'GET') {
        res.writeHead('Content-Type', 'text/html');
        res.end(new AddPager(errors, req.session.isLogin).render());
    }
    else {
        post(req).then(function (data) {

            if (!(data.title && data.title.length >= 5)) {
                errors.title = 'title char length must > 5';
            }
            if (!(data.body && data.body.length >= 10)) {
                errors.body = 'body char length must > 10';
            }
            if (!(data.vnum === req.session.vnum)) {
                errors.vnum = '验证吗错误!';
            }

            if (Object.keys(errors).length) {
                res.writeHead('Content-Type', 'text/html');
                res.end(new AddPager(errors, req.session.isLogin).render());
            }
            else {
                database.add(data);
                res.writeHead('Content-Type', 'text/html');
                res.end(new IndexPage(database.list, req.session.isLogin).render());
            }
        });
    }

};
