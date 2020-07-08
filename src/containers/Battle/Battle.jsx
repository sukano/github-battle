// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { setPlayer, resetPlayer } from '../../actions'

// Components
import { Button, Player, PlayerForm } from '../../components'

const Battle = ({ players, reset, set }) => {
  const { 1: player1, 2: player2 } = players

  return (
    <div>
      <div className="flex justify-center overflow-hidden px-20">
        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          {player1 ? (
            <div className="text-center">
              <Player data={player1} />
              <button className="mt-4 text-red-700" onClick={() => reset(1)}>Reset</button>
            </div>
          ) : (
            <PlayerForm onSubmit={(values) => set(1, values.username)} title="Player One" />
          )}
        </div>

        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          {player2 ? (
            <div className="text-center">
              <Player data={player2} />
              <button className="mt-4 text-red-700" onClick={() => reset(2)}>Reset</button>
            </div>
          ) : (
            <PlayerForm onSubmit={(values) => set(2, values.username)} title="Player Two" />
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

const mapStateToProps = (state) => ({
  players: state.players
})

const mapDispatchToProps = (dispatch) => ({
  reset: (position) => {
    dispatch(resetPlayer(position))
  },
  set: (position, username) => {
    dispatch(setPlayer(position, username))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Battle)
