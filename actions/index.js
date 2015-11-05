/**
 * Created by Will WM. Zhang on 2015-11-02 上午11:35.
 */

var IndexPager = require('../views/IndexPager');
var database = require('../database');

module.exports = function (req, res) {
    res.writeHead('Content-Type', 'text/html');
    res.end(new IndexPager(database.list, req.session.isLogin).render());
};

