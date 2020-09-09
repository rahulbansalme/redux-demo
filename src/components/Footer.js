import React from 'react'
import { connect } from 'react-redux'

import FilterLink from '../containers/FilterLink'
import { VisibilityFilters, fetchAsynCount } from '../actions'

const Footer = ({ onClick, isFetchingCount, asyncCount }) => (
  <>
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>

    <div>
      <br />
      <button onClick={onClick}>Fetch count async</button> : {isFetchingCount ? <span>Fetching...</span> : <span>{asyncCount}</span>}
    </div>
  </>
)

const mapStateToProps = (state) => ({
  isFetchingCount: state.todos.isFetchingCount,
  asyncCount: state.todos.asyncCount,
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(fetchAsynCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)