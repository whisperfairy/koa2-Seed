
import Router from 'koa-router';
let indexRender = async  (ctx,next)=>{
    ctx.render('index',{content:"hi,this is panghu"});
    ctx.status=200;
    await next();

}
let index = new Router();
index.get('/',indexRender);
export {index};

