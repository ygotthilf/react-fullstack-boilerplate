const todos = [
  { name: 'un'},
  { name: 'deux' }
];

export default {

  *list() {
    this.body = todos;
  },

  *create() {
    todos.push(this.request.body);
    this.body = this.request.body;
  }
};
