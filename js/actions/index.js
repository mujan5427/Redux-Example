/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */


let todoItemId = 0;

export function addTodo(text) {
  return {

    type: ADD_TODO,
    id: todoItemId++,
    text: text
  };
}

export function toggleTodo(id) {
  return {

    type: TOGGLE_TODO,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return {

    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}
