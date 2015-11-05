/**
 * Created by Will WM. Zhang on 2015-11-03 上午12:21.
 */

"use strict";

var AbstractPager = require('./AbstractPager');

class EditPager extends AbstractPager {

    constructor(id, article, errors, isLogin) {
        super(isLogin);
        this.id = id;
        this.article = article;
        this.errors = errors || {};
    }

    _render() {

        let time = Date.now();

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';
        let vnumError = this.errors.vnum || '';

        return `
<form class="form-horizontal" action="/update" method="post">
    <input type="hidden" name="id" value="${this.id}">
    <div class="form-group">
        <label for="title" class="col-sm-2 control-label">标题</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="title" name="title" value="${this.article.title}" placeholder="标题">
            <p>${titleError}</p>
        </div>
    </div>
    <div class="form-group">
        <label for="body" class="col-sm-2 control-label">内容</label>
        <div class="col-sm-10">
            <textarea class="form-control" id="body" name="body" placeholder="内容">${this.article.body}</textarea>
            <p>${bodyError}</p>
        </div>
    </div>
    <div class="form-group">
        <label for="vnum" class="col-sm-2 control-label">验证码 <img src="/vnum?${time}"></label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="vnum" name="vnum" placeholder="验证码">
            <p class="bg-danger">${vnumError}</p>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">提交</button>
        </div>
    </div>
</form>
        `;
    }

}

module.exports = EditPager;