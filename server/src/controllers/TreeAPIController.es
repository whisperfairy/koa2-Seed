
import Router from 'koa-router';
let addTree= async  (ctx,next)=>{
    console.log(ctx.request.body);
    await next();
    ctx.body='access';
}
let TreeAPI = new Router();
TreeAPI.post('/API/Tree',addTree);
export {TreeAPI};

