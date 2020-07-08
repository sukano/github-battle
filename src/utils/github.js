// Libraries
import axios from 'axios'

export const getUser = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
}

export const searchRepositories = (q) => {
  return axios.get(`https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&type=Repositories`)
}
