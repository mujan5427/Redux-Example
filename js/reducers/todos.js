const todo = (prevState = {}, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        completed: false,
        text: action.text
      };

    case 'TOGGLE_TODO':
      if (prevState.id !== action.id) {
        return prevState;
      }

      return Object.assign({}, prevState, { completed: !prevState.completed });

    default:
      return prevState;
  }
}

const todos = (prevState = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...prevState,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return prevState.map(
        (todoItem) => todo(todoItem, action)
      );

    default:
      return prevState;
  }
}

export default todos;
