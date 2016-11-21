'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.initController = initController;

var _TestController = require('./TestController');

var _TreeAPIController = require('./TreeAPIController');

/**
 * Created by whisper on 2016/11/16.
 */
function initController(app) {
      app.use(_TestController.index.routes());
      app.use(_TestController.index.allowedMethods);
      app.use(_TreeAPIController.TreeAPI.routes());
      app.use(_TreeAPIController.TreeAPI.allowedMethods);
}
//# sourceMappingURL=WebStorm Workspace/koa/maps/index.js.map
