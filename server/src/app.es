import 'es6-shim'
import config from '../config/ServerConfig'
import koa from 'koa'
import  bodyParser from 'koa-bodyparser';
import {initController} from './controllers/index';
import serve from 'koa-static'
import Pug from 'koa-pug'
import path from 'path';
console.log(config.staticDir);
const pug = new Pug({
    viewPath:config.viewDir
})
const app = new koa();
app.use(serve('../public'));
app.use(bodyParser());
pug.use(app);
initController(app);
app.listen(3000); // run express application