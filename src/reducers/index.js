// Redux
import { combineReducers } from 'redux'

// Reducers
import activeLanguage from './activeLanguage'
import loading from './loading'
import players from './player'
import repositories from './repositories'

const githubBattleApp = combineReducers({
  activeLanguage,
  loading,
  players,
  repositories
})

export default githubBattleApp
