'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TreeAPI = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addTree = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log(ctx.request.body);
                        _context.next = 3;
                        return next();

                    case 3:
                        ctx.body = 'access';

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function addTree(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
var TreeAPI = new _koaRouter2.default();
TreeAPI.post('/API/Tree', addTree);
exports.TreeAPI = TreeAPI;
//# sourceMappingURL=WebStorm Workspace/koa/maps/TreeAPIController.js.map
