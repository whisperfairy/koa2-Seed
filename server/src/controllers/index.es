/**
 * Created by whisper on 2016/11/16.
 */
import {index} from './TestController'
import {TreeAPI}from './TreeAPIController'
export function initController(app){
      app.use(index.routes());
      app.use(index.allowedMethods);
      app.use(TreeAPI.routes());
      app.use(TreeAPI.allowedMethods);
}