// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import Repository from '../Repository/Repository'

const RepositoryList = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center overflow-hidden px-12">
      {items.map((item, index) => <Repository {...item} key={item.id} position={index + 1} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.repositories
})

export default connect(mapStateToProps)(RepositoryList)
