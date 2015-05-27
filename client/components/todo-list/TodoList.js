import React from 'react';

export default class TodoList extends React.Component {

  render() {
    const createItem = function(item, index) {
      return <li className="TodoList-item" key={index}>{item.name}</li>;
    };

    return <ul className="TodoList">{this.props.items.map(createItem)}</ul>;
  }
}
