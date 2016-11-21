/**
 * Created by whisper on 2016/11/6.
 */
'use strict'
//应用配置文件
var path = require('path');
var config = {
    "title": "HR-Seed-Koa2",
    //默认生产环境
    "env": "dev",
    //端口号配置
    "port": 3000,
    "Context":path.join(__dirname),
     //webpack所在目录
    "webpackDir":path.join(__dirname,"../../webpack"),
    //模板所在的目录
    "viewDir": path.join(__dirname, '..', 'views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', 'logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..','public')
};
module.exports = config;