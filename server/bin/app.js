'use strict';

require('es6-shim');

var _ServerConfig = require('../config/ServerConfig');

var _ServerConfig2 = _interopRequireDefault(_ServerConfig);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _index = require('./controllers/index');

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaPug = require('koa-pug');

var _koaPug2 = _interopRequireDefault(_koaPug);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_ServerConfig2.default.staticDir);
var pug = new _koaPug2.default({
    viewPath: _ServerConfig2.default.viewDir
});
var app = new _koa2.default();
app.use((0, _koaStatic2.default)('../public'));
app.use((0, _koaBodyparser2.default)());
pug.use(app);
(0, _index.initController)(app);
app.listen(3000); // run express application
//# sourceMappingURL=WebStorm Workspace/koa/maps/app.js.map
