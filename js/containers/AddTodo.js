import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {

  let input = {};

  return (
    <div>
      <form onSubmit={
        (event) => {
          event.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = '';
        }

      }>
        {/* Use the `ref` callback to store a reference to a DOM node */}
        <input type="text" ref={
          (domNode) => {
            input = domNode;
          }
        } />

        <button type="submit">
          Add New ToDo
        </button>
      </form>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;
