// React
import React, { useState } from 'react'

// Components
import { Button, Player, PlayerForm } from '../../components'

// Utils
import { getUser } from '../../utils/github'

const Battle = () => {
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()

  const fetchUser = (username, callback) => {
    getUser(username)
      .then((response) => {
        callback(response.data)
      })
  }

  return (
    <div>
      <div className="flex justify-center overflow-hidden px-20">
        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          {player1 ? (
            <div className="text-center">
              <Player data={player1} />
              <button className="mt-4 text-red-700" onClick={() => setPlayer1()}>Reset</button>
            </div>
          ) : (
            <PlayerForm onSubmit={(values) => fetchUser(values.username, setPlayer1)} title="Player One" />
          )}
        </div>

        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          {player2 ? (
            <div className="text-center">
              <Player data={player2} />
              <button className="mt-4 text-red-700" onClick={() => setPlayer2()}>Reset</button>
            </div>
          ) : (
            <PlayerForm onSubmit={(values) => fetchUser(values.username, setPlayer2)} title="Player Two" />
          )}
        </div>
      </div>

      {player1 && player2 && (
        <div className="flex justify-center mt-16">
          <Button color="red-700" to={`/battle/result?player1=${player1.login}&player2=${player2.login}`}>
            Battle
          </Button>
        </div>
      )}
    </div>
  )
}

export default Battle
