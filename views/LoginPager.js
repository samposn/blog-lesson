/**
 * Created by Will WM. Zhang on 2015-11-03 上午12:21.
 */

"use strict";

var AbstractPager = require('./AbstractPager');

class LoginPager extends AbstractPager {

    constructor(errors, isLogin) {
        super(isLogin);
        this.errors = errors || '';
    }

    _render() {

        let time = Date.now();

        return `
<form class="form-horizontal" action="/login" method="post">
    <div class="form-group">
        <label for="loginname" class="col-sm-2 control-label">登录名称</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="loginname" name="loginname" placeholder="登录名称">
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-2 control-label">登录密码</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="password" name="password" placeholder="登录密码">
        </div>
    </div>
    <div class="form-group">
        <label for="vnum" class="col-sm-2 control-label">验证码 <img src="/vnum?${time}"></label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="vnum" name="vnum" placeholder="验证码">
        </div>
    </div>
    <p class="bg-danger">${this.errors}</p>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">登录</button>
        </div>
    </div>
</form>
        `;
    }

}

module.exports = LoginPager;