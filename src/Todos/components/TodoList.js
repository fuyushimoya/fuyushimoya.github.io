import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const list = this.props.todos.entrySeq().map((todoEntry) => {
      const [index, todo] = todoEntry;
      return (
        <Todo
          todo={todo}
          key={index}
          onClick={() => this.props.onTodoClick(index)}
        />
      );
    })

    return (
      <ul>
        {list}
      </ul>
    );
  }
};

TodoList.PropTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Immutable.List).isRequired
};

export default TodoList;