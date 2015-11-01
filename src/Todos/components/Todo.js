import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

class Todo extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Prevent onClick to be falsly checked. So we need to maunaul check todo.
    return !Immutable.is(this.props.todo, nextProps.todo);
  }

  render() {
    const completed = this.props.todo.get('completed');
    return (
      <li 
        onClick={this.props.onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: completed ? 'default' : 'pointer'
        }}
      >
        {this.props.todo.get('text')}
      </li>
    );
  }
};

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Immutable.Map).isRequired
};

export default Todo;