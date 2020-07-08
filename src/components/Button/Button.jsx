// React
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = ({ children, color, to, type }) => {
  const classes = [
    `bg-${color}`,
    'inline-block',
    'py-2',
    'text-center',
    'text-white',
    'w-64'
  ]

  if (to) {
    return <Link className={classes.join(' ')} to={to}>{children}</Link>
  }

  return <button className={classes.join(' ')} type={type}>{children}</button>
}

Button.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit'])
}

Button.defaultProps = {
  color: 'black',
  to: null,
  type: 'button'
}

export default Button
