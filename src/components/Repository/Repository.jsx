// React
import React from 'react'
import PropTypes from 'prop-types'

const formatter = new Intl.NumberFormat('fr-FR')

const Repository = ({ html_url, name, position, owner, stargazers_count }) => {
  return (
    <div className="my-12 px-12 overflow-hidden" style={{ minWidth: '10rem' }}>
      <div className="text-center text-lg">#{position}</div>

      <img alt={owner.login} className="mx-auto my-2 rounded-full" src={owner.avatar_url} style={{ width: 150 }} />

      <div className="leading-relaxed text-center text-sm">
        <a className="text-red-700" href={html_url} rel="noopener noreferrer" target="_blank">{name}</a>

        <div>@{owner.login}</div>

        <div>{formatter.format(stargazers_count)} stars</div>
      </div>
    </div>
  )
}

Repository.propTypes = {
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  }),
  stargazers_count: PropTypes.number.isRequired
}

export default Repository
