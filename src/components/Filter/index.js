// React
import React from 'react'
import PropTypes from 'prop-types'

export default class Filter extends React.Component {
  render () {
    const { enabled, onSelected, name } = this.props

    return (
      <li
        className={`cursor-pointer font-semibold${enabled ? ' text-red-700' : ''}`}
        onClick={() => onSelected(name)}
      >
        { name }
      </li>
    )
  }
}

Filter.propTypes = {
  enabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired
}

Filter.defaultProps = {
  enabled: false
}
