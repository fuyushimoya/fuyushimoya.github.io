import Immutable from 'immutable';
import {combineReducers} from 'redux-immutablejs'
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './Actions';

const {ALL} = VisibilityFilters;

/**
 * Reducers
 */
function visibilityFilter(state = ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter;
  } else {
    return state;
  }
}

// Todo struct:
// TODO: MOVE TO PROPER FILE.
var TodoItem = Immutable.Record({text: '', completed: false});

function todos(state = Immutable.Map(), action) {
  if (action.type === ADD_TODO) {
    return state.set(action.index, new TodoItem({text: action.text, completed: action.completed}));
  } else if (action.type === COMPLETE_TODO) {
    return state.update(action.index, (item) => item.set('completed', true));
  } else {
    return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;