// React
import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuItem = ({ children, to }) => {
  return (
    <NavLink
      activeClassName="font-semibold "
      className="cursor-pointer text-red-700"
      exact={to === '/'}
      to={to}
    >
      {children}
    </NavLink>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired
}

export default MenuItem
