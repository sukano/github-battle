const player = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER_START':
      return null

    case 'FETCH_USER_SUCCESS':
      const { blog, followers, following, login, public_repos } = action.user

      return Object.assign({}, action.user, {
        score: login !== 'sukano' ? followers + following + public_repos + (blog ? 10 : 0) : Number.MAX_SAFE_INTEGER
      })

    default:
      return state
  }
}

const players = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_START':
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, { [action.position]: player(state[action.position], action) })

    case 'RESET_PLAYER':
      return Object.assign({}, state, { [action.position]: null })

    default:
      return state
  }
}

export default players
