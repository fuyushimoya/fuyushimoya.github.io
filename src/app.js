import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import createStore from './store';

// Todo
import TodoReducer from './Todos/Reducer';
import TodoApp from './Todos/TodoApp';

let store = createStore(TodoReducer);

let rootElement = document.getElementById('app-entry');

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);