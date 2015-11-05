/**
 * Created by Will WM. Zhang on 2015-11-04 下午1:52.
 */

var LoginPager = require('../views/LoginPager');
var post = require('../utils/post');
var indexAction = require('./index');

module.exports = function (req, res) {
    if (req.method === 'GET') {
        res.end(new LoginPager().render());
    }
    else {
        post(req).then(data => {
            var loginname = data.loginname;
            var password = data.password;

            if (loginname && password && loginname === 'super' && password === '123456' && req.session.vnum === data.vnum) {
                req.session.isLogin = true;
                indexAction(req, res);
            }
            else {
                res.end(new LoginPager("登录失败，请重新登录!").render());
            }
        });
    }
};