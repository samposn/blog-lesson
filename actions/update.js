/**
 * Created by Will WM. Zhang on 2015-11-03 下午2:12.
 */

"use strict";

var EditPager = require('../views/EditPager');
var database = require('../database');
var query = require('../utils/query');
var post = require('../utils/post');
var indexAction = require('./index');
var loginAction = require('./login');

module.exports = function (req, res) {

    if (!req.session.isLogin) {
        loginAction(req, res);
        return;
    }

    var errors = {};
    if (req.method === 'GET') {
        var id = query(req).id;
        var article = database.list[id];
        res.end(new EditPager(id, article, errors, req.session.isLogin).render());
    }
    else {
        post(req).then(data => {

            let id = data.id;

            if (!(data.vnum === req.session.vnum)) {
                errors.vnum = '验证吗错误!';
                res.end(new EditPager(id, data, errors, req.session.isLogin).render());
            }

            delete data.id;
            delete data.vnum;
            database.update(id, data);
            indexAction(req, res);
        });
    }
};















