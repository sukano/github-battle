// React
import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'

// Actions
import { changeActiveLanguage } from '../../actions'

const Filter = ({ active, name, onClick }) => {
  return (
    <li
      className={`cursor-pointer font-semibold${active ? ' text-red-700' : ''}`}
      onClick={onClick}
    >
      { name }
    </li>
  )
}

Filter.propTypes = {
  name: PropTypes.string.isRequired
}

const mapStateToProps = (state, onwProps) => ({
  active: onwProps.name === state.activeLanguage
})

const mapDispatchToProps = (dispatch, onwProps) => ({
  onClick: () => {
    dispatch(changeActiveLanguage(onwProps.name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
