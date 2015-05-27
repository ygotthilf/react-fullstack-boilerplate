import Router from 'koa-router';
import controller from './todoController';

const router = new Router({
  prefix: '/api/todos'
});

router.get('/', controller.list);
router.post('/', controller.create);

export default router;
