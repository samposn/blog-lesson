/**
 * Created by Will WM. Zhang on 2015-11-03 上午12:33.
 */

"use strict";

class AbstractPager {

    constructor(isLogin) {
        this.isLogin = isLogin;
    }

    _render() {
        throw new Error('子类必须实现');
    }

    render() {
        return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>首页</title>

    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">

</head>
<body class="container">

    <div class="jumbotron">
        <h1>Blog Lesson</h1>
    </div>

    <ul class="nav nav-pills">
        <li><a href="/">首页</a></li>
        <li><a href="/add" class="${this.isLogin ? '' : 'hidden'}">添加</a></li>
        <li><a href="/login" class="${this.isLogin ? 'hidden' : ''}">登录</a></li>
        <li><a href="/logout" class="${this.isLogin ? '' : 'hidden'}">登出</a></li>
    </ul>
    ${this._render()}
</body>
</html>
        `;
    }

}

module.exports = AbstractPager;