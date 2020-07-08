const respositories = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REPOSITORIES_START':
      return []

    case 'FETCH_REPOSITORIES_SUCCESS':
      return action.repositories

    default:
      return state
  }
}

export default respositories
