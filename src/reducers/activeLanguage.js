const activeLanguage = (state = 'All', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_LANGUAGE':
      return action.name

    default:
      return state
  }
}

export default activeLanguage
