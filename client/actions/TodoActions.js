import alt from '../core/alt';
import todoApi from '../api/todoApi';

class ActionsCreators {

  constructor() {
    this.generateActions(
      'addItem',
      'removeItem',
      'queryFail',
      'createFail'
    );
  }

  query() {

    this.dispatch([]);

    todoApi.query().then(
      this.dispatch.bind(this),
      this.actions.queryFail.bind(this)
    );
  }

  create(todo) {
    todoApi.create(todo).then(
      this.dispatch.bind(this),
      this.actions.createFail.bind(this)
    );
  }
}

export default alt.createActions(ActionsCreators);
