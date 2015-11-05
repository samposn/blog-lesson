/**
 * Created by Will WM. Zhang on 2015-11-04 下午5:20.
 */

var indexAction = require('./index');

module.exports = function (req, res) {

    req.session.isLogin = false;
    indexAction(req, res);

};