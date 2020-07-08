// Utils
import { getUser, searchRepositories } from '../utils/github'

const setActiveLanguage = (name) => ({ type: 'SET_ACTIVE_LANGUAGE', name })

const fetchRepositoriesStart = () => ({ type: 'FETCH_REPOSITORIES_START' })
const fetchRepositoriesSuccess = (repositories) => ({ type: 'FETCH_REPOSITORIES_SUCCESS', repositories })
const fetchRepositoriesFailure = (message) => ({ type: 'FETCH_REPOSITORIES_FAILURE', message })

export const fetchRepositories = () => {
  return (dispatch, getState) => {
    const { activeLanguage } = getState()

    dispatch(fetchRepositoriesStart())

    searchRepositories(`stars:>1+language:${activeLanguage.toLowerCase()}`)
      .then((response) => {
        dispatch(fetchRepositoriesSuccess(response.data.items))
      })
      .catch((error) => {
        dispatch(fetchRepositoriesFailure(error.message))
      })
  }
}

export const changeActiveLanguage = (name) => {
  return (dispatch) => {
    dispatch(setActiveLanguage(name))
    dispatch(fetchRepositories())
  }
}

const fetchUserStart = (position) => ({ type: 'FETCH_USER_START', position })
const fetchUserSuccess = (position, user) => ({ type: 'FETCH_USER_SUCCESS', position, user })
const fetchUserFailure = (message) => ({ type: 'FETCH_USER_FAILURE', message })

export const setPlayer = (position, username) => {
  return (dispatch) => {
    dispatch(fetchUserStart(position))

    getUser(username)
      .then((response) => {
        dispatch(fetchUserSuccess(position, response.data))
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message))
      })
  }
}

export const resetPlayer = (position) => ({ type: 'RESET_PLAYER', position })
