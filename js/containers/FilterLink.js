import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {

  return {
    active: state.visibilityFilter === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    changeVisibility: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

/*
 * Combinde `state` and `dispatch` become single props object
 * And pass it into <Link>
 *
 * For example:
 *
 * <FilterLink>
 *  <Link props={props object}>
 * </FilterLink>
 */

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
