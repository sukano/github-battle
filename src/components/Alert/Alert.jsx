// React
import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ children, title, type }) => {
  const classes = [
    'border',
    'px-4',
    'py-3',
    'rounded',
    'relative',
    'sm:m-auto',
    'sm:w-1/2'
  ]

  switch (type) {
    case 'error':
      classes.push('bg-red-100', 'border-red-400', 'text-red-700')
      break

    default:
      classes.push('bg-blue-100', 'border-blue-400', 'text-blue-700')
  }

  return (
    <div className={classes.join(' ')} role="alert">
      <strong className="font-bold mr-1">{title}</strong>
      <span className="block sm:inline">{children}</span>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert
