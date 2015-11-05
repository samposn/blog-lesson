/**
 * Created by Will WM. Zhang on 2015-11-03 上午12:21.
 */

"use strict";

var AbstractPager = require('./AbstractPager');

class IndexPager extends AbstractPager {

    constructor(articleList, isLogin) {
        super(isLogin);
        this.list = articleList;
    }

    _render() {
        let listDOMString = this.list.map(
            (artice, index) => `
<li class="list-group-item">
    <h4>${artice.title}</h4>
    <p>${artice.body}</p>
    <div class="${this.isLogin ? '' : 'hidden'}">
        <a href="/del?id=${index}">Del</a>
        <a href="/update?id=${index}">Update</a>
    </div>
</li>
            `
        ).join('\n');
        return `
<ul class="list-group">
    ${listDOMString}
</ul>
        `;
    }

}

module.exports = IndexPager;