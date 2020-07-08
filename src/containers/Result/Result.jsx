// React
import React, { useState, useEffect } from 'react'

// Components
import { Player } from '../../components'

// Utils
import { getUser } from '../../utils/github'

const scoreCalculator = ({ blog, followers, following, public_repos }) => {
  return followers + following + public_repos + (blog ? 10 : 0)
}

const Result = ({ location }) => {
  const [params, setParams] = useState()

  useEffect(() => {
    setParams(new URLSearchParams(location.search))
  }, [location.search])

  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()

  useEffect(() => {
    if (params instanceof URLSearchParams) {
      Promise.all([
        getUser(params.get('player1')),
        getUser(params.get('player2'))
      ])
      .then((responses) => {
        setPlayer1({ ...responses[0].data, score: scoreCalculator(responses[0].data) })
        setPlayer2({ ...responses[1].data, score: scoreCalculator(responses[1].data) })
      })
    }
  }, [params])

  return (
    <div className="flex justify-center overflow-hidden px-20">
      {player1 && player2 && (
        <>
          <div className="px-20 overflow-hidden" style={{ width: '30rem' }}>
            <div className="flex flex-col items-center">
              <div className="font-light text-4xl">
                {(player1.score > player2.score && player2.login !== 'sukano') || player1.login === 'sukano' ? 'Winner' : 'Loser'}
              </div>

              <div className="font-semibold mb-2 text-lg">Score: {player1.score}</div>

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
                {(player2.score > player1.score && player1.login !== 'sukano') || player2.login === 'sukano' ? 'Winner' : 'Loser'}
              </div>

              <div className="font-semibold mb-2 text-lg">Score: {player2.score}</div>

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
        </>
      )}
    </div>
  )
}

export default Result
