import React from 'react';
import Timer from '../timer/Timer';
import TodoList from '../todo-list/TodoList';
import TodoActions from '../../actions/TodoActions';
import TodoStore from '../../stores/TodoStore';

export default class TodoApp extends React.Component {

  constructor (props) {
    super(props);
    this.state = {items: TodoStore.getState().model};
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  componentDidMount() {
    this.unlisten = TodoStore.listen(() => {
      this.setState({ items: TodoStore.getState().model });
    });

    TodoActions.query();
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleSubmit(e) {
    e.preventDefault();
    TodoActions.create({ name: this.state.text });
    this.setState({ text: ''});
  }

  render() {
    return (
      <div className="Todo">
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form className="Todo-form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="Todo-input" onChange={this.onChange.bind(this)} value={this.state.text} />
          <button className="Todo-submit" type="submit">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Timer />
      </div>
    );
  }
}
