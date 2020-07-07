// React
import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ children, title }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative sm:m-auto sm:w-1/2" role="alert">
      <strong className="font-bold mr-1">{title}</strong>
      <span className="block sm:inline">{children}</span>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.string.isRequired
}

export default Alert
