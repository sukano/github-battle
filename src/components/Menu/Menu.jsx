// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
import MenuItem from '../MenuItem'

const Menu = ({ items }) => {
  return (
    <ul className="flex px-8 py-4 space-x-2">
      {items.map((item, index) => (
        <MenuItem key={index} to={item.path}>
          {item.name}
        </MenuItem>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })).isRequired
}

export default Menu
