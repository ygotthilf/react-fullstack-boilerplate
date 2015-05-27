import {join} from 'path';
import serve from 'koa-static';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

export default function(app) {

  app.use(logger());

  app.use(serve(join('.tmp', 'serve/')));
  app.use(serve('client'));

  app.use(bodyParser());

  require('./routes')(app);
}
