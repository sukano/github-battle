
const error = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_REPOSITORIES_FAILURE':
      return action.message

    case 'FETCH_REPOSITORIES_SUCCESS':
      return null

    default:
      return state
  }
}

export default error
