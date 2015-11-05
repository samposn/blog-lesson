/**
 * Created by Will WM. Zhang on 2015-11-01 下午11:11.
 */

var fs = require('fs');
var list;
const filepath = __dirname + '/data.json';

try {
    list = JSON.parse(fs.readFileSync(filepath));
} catch (e) {
    list = [];
}

module.exports = {

    add(article) {
        list.push(article);
        this.store();
    },
    del(index) {
        list.splice(index, 1);
        this.store();
    },
    update(index, newArtice) {
        list.splice(index, 1, newArtice);
        this.store();
    },
    get list() {
        return list;
    },
    store(callback) {
        callback = callback || function(){};
        fs.writeFile(filepath, JSON.stringify(list), callback);
    }
};


