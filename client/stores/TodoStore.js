import alt from '../core/alt';
import TodoActions from '../actions/TodoActions';

class Store {

  constructor() {
    this.model = [];
    this.bindActions(TodoActions);
  }

  onAddItem(item) {
    this.todos.push(item);
  }

  onCreate(todo) {
    this.model.push(todo);
  }

  onQuery(todos) {
    this.model = todos;
    this.hasError = false;
  }

  onQueryFail() {
    this.model = [];
    this.hasError = true;
  }
}

export default alt.createStore(Store, 'TodoStore');
