import React, { PropTypes } from 'react'

const Todo = ({ toggleTodoItem, completed, text }) => (
  <li
    onClick={toggleTodoItem}

    // The `style` prop expects a mapping from style properties to values, not a string.
    // So, it must be an object.
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
