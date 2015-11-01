/**
 * Action Types
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 * Other
 */
// Possible values for filter
export const VisibilityFilters = {
  ALL: 'ALL',
  COMPLETE: 'COMPLETE',
  UNCOMPLETE: 'UNCOMPLETE'
};

/**
 * Action creators
 */
export function addTodo(index, text, completed) {
  return {
    type: ADD_TODO,
    text,
    index,
    completed
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  };
}

export function setVisibility(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}