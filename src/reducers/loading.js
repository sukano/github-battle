const loading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_REPOSITORIES_START':
      return true

    case 'FETCH_REPOSITORIES_SUCCESS':
    case 'FETCH_REPOSITORIES_FAILURE':
      return false

    default:
      return state
  }
}

export default loading
