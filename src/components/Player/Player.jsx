// React
import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ data }) => {
  return (
    <div>
      <img alt={data.login} className="block mb-2 mx-auto rounded-full" src={data.avatar_url} style={{ width: 150 }} />
      <div className="font-semibold leading-relaxed text-center text-lg">
        @{data.login}
      </div>
    </div>
  )
}

Player.propTypes = {
  data: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired
  })
}

export default Player
