import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodoItem}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}

        // Use anonymous function syntax
        // Pass a function into props of <Todo>
        toggleTodoItem={() => toggleTodoItem(todo.id)}
      />
    )}
  </ul>);

export default TodoList;
