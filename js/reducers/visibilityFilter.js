const visibilityFilter = (prevState = 'SHOW_ALL', action) => {
  switch (action.type) {

    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return prevState;
  }
}

export default visibilityFilter;
