/**
 * Created by Will WM. Zhang on 2015-11-03 上午1:53.
 */

"use strict";

var database = require('../database');
var getId = require('../utils/getId');
var indexAction = require('./index');
var loginAction = require('./login');

module.exports = function del(req, res) {

    if (!req.session.isLogin) {
        loginAction(req, res);
        return;
    }


    getId(req, id=>{
        database.del(id);
        indexAction(req, res);
    });
};

