// React
import React from 'react'

// Styles
import './styles.css'

const Loader = () => {
  return (
    <div className="text-center">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
