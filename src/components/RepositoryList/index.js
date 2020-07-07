// React
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Repository from '../Repository'

export default class RepositoryList extends React.Component {
  render () {
    const { items } = this.props

    return (
      <div className="flex flex-wrap justify-center overflow-hidden px-12">
        {items.map((item, index) => <Repository {...item} key={item.id} position={index + 1} />)}
      </div>
    )
  }
}

RepositoryList.propTypes = {
  items: PropTypes.array.isRequired
}
