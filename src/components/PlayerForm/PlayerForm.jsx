// React
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '../Button'

const PlayerForm = ({ onSubmit, title }) => {
  const [username, setUsername] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ username })
  }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <h3 className="text-2xl">{title}</h3>

      <input
        className="block border border-solid border-gray-500 my-4 outline-none p-1 rounded-sm w-full"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
        type="text"
      />

      <Button type="submit">Submit</Button>
    </form>
  )
}

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default PlayerForm
