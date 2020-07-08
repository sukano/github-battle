// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Filter from '../Filter'

const FilterList = ({ items }) => {
  const languages = [...items]
  languages.sort((a, b) => a.localeCompare(b))

  return (
    <ul className="flex justify-center mb-6 space-x-2">
      <Filter name="All" />

      {languages.map((item, index) => (
        <Filter key={index} name={item} />
      ))}
    </ul>
  )
}

FilterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilterList
