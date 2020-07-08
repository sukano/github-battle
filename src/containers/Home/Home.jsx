// React
import React from 'react'

// Components
import { Button } from '../../components'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold mb-6 text-4xl">Github Battle: Battle your friends... and stuff.</h1>

      <Button to="/battle">Battle</Button>
    </div>
  )
}

export default Home
