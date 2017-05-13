import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList'


function getTodos({todos, visibilityFilter}) {
  switch (visibilityFilter) {

    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  };
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoItem: (id) => dispatch(toggleTodo(id))
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
