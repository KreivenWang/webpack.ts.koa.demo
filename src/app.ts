import koa from 'koa';

const app = new koa();

app.use(ctx => {
  ctx.body = 'hello world';
});

export default app;
