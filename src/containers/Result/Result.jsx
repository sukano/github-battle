// React
import React, { useEffect } from 'react'

// Router
import { useHistory } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// Components
import { Alert, Player } from '../../components'

const formatter = new Intl.NumberFormat('fr-FR')

const Result = ({ players }) => {
  const history = useHistory()

  useEffect(() => {
    if (players && Object.keys(players).length !== 2) {
      history.push('/battle')
    }
  }, [history, players] )

  const { 1: player1, 2: player2 } = players

  if (!player1 && !player2) {
    return null
  }

  return (
    <>
      {(player1.login === 'sukano' || player2.login === 'sukano') && (
        <Alert title="Désolé !">Le créateur de l'application ne peut pas perdre ;)</Alert>
      )}

      <div className="flex justify-center overflow-hidden px-20">
        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          <div className="flex flex-col items-center">
            <div className="font-light text-4xl">
              {player1.score > player2.score ? 'Winner' : 'Loser'}
            </div>

            <div className="font-semibold mb-2 text-lg">Score: {formatter.format(player1.score)}</div>

            <Player data={player1} />

            <div className="mt-8 self-start text-sm">
              <p>{player1.name}</p>
              <p>{player1.location}</p>
              <p>Followers: {player1.followers}</p>
              <p>Following: {player1.following}</p>
              <p>Public repos: {player1.public_repos}</p>
              {player1.blog && <a href={player1.blog} rel="noopener noreferrer" target="_blank">{player1.blog}</a>}
            </div>
          </div>
        </div>

        <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
          <div className="flex flex-col items-center">
            <div className="font-light text-4xl">
              {player2.score > player1.score ? 'Winner' : 'Loser'}
            </div>

            <div className="font-semibold mb-2 text-lg">Score: {formatter.format(player2.score)}</div>

            <Player data={player2} />

            <div className="mt-8 self-start text-sm">
              <p>{player2.name}</p>
              <p>{player2.location}</p>
              <p>Followers: {player2.followers}</p>
              <p>Following: {player2.following}</p>
              <p>Public repos: {player2.public_repos}</p>
              {player2.blog && <a href={player2.blog} rel="noopener noreferrer" target="_blank">{player2.blog}</a>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  players: state.players
})

export default connect(mapStateToProps)(Result)
