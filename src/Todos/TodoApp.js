import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibility, VisibilityFilters} from './Actions';
import Firebase  from 'firebase'

import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import {FIREBASE_URL} from './settings'

class TodoApp extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    this.firebase = new Firebase(FIREBASE_URL);

    // Add eventListeners to firebase to listen changes
    this.firebase.on('child_added', (dataSnapshot, prevKey) => {
      const { text, completed } = dataSnapshot.val();
      const key = dataSnapshot.key();
      console.log(text, key, prevKey);
      dispatch(addTodo(key, text, completed));
    });
    this.firebase.on('child_changed', (dataSnapshot) => {
      const key = dataSnapshot.key();
      dispatch(completeTodo(key))
    });
  }
  _addTodo(text) {
    const {dispatch} = this.props;
    this.firebase.push({text: text, completed: false}, (err) => {
      if (err) {
        console.error('Failed to add a new todo.');
      }
    });
  }

  _completeTodo(key) {
    const {dispatch} = this.props;
    this.firebase.child(key).update({completed: true}, (err) => {
      if (err) {
        console.error('Failed to add a new todo.');
      }
    });
  }
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <section>
        <h2 className='visually-hidden'>Todo List</h2>
        <AddTodo 
          onAddClick={(text) => this._addTodo(text)}
        />
        <TodoList 
          todos={this.props.visibleTodos}
          onTodoClick={(key) => this._completeTodo(key)}
        />
        <Filter
          filter={this.props.visibilityFilter}
          onFilterChange={(filter) => dispatch(setVisibility(filter))}
        />
      </section>
    );
  }


}

const availableFilters = 
  Object.keys(VisibilityFilters).map((key) => VisibilityFilters[key]);

TodoApp.PropTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf(availableFilters).isRequired
};

function selectTodos(todos, filter) {
  switch(filter) {
    case VisibilityFilters.ALL:
      return todos;
    case VisibilityFilters.COMPLETE:
      return todos.filter((todo) => todo.get('completed'));
    case VisibilityFilters.UNCOMPLETE:
      return todos.filter((todo) => !todo.get('completed'));
  }
}

function selector(state) {
  return {
    visibleTodos: selectTodos(state.get('todos'), state.get('visibilityFilter')),
    visibilityFilter: state.get('visibilityFilter')
  };
}

export default connect(selector)(TodoApp);