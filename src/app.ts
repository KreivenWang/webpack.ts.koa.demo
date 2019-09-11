import koa from 'koa';

const app = new koa();

let visitCount = 0;
app.use(ctx => {
  ctx.body = 'hello world';
  console.log('visited ' + ++visitCount);
});

export default app;
