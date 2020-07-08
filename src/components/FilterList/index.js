// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Filter from '../Filter'

export default class FilterList extends Component {
  render () {
    const { activeFilter, items, onActiveFilterChange } = this.props

    const languages = [...items]
    languages.sort((a, b) => a.localeCompare(b))

    return (
      <ul className="flex justify-center mb-6 space-x-2">
        <Filter
          enabled={activeFilter === 'All'}
          name="All"
          onSelected={() => onActiveFilterChange('All')}
        />

        {languages.map((item, index) => (
          <Filter
            enabled={activeFilter === item}
            key={index}
            name={item}
            onSelected={(language) => onActiveFilterChange(language)}
          />
        ))}
      </ul>
    )
  }
}

FilterList.propTypes = {
  activeFilter: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onActiveFilterChange: PropTypes.func.isRequired
}

FilterList.defaultProps = {
  activeFilter: 'All'
}
