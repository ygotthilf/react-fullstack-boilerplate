import koa from 'koa';

const app = koa();

require('./config/koa')(app);

app.listen(3000);

export default app;
