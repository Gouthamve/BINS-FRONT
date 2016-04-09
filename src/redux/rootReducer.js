import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import audio from './modules/audio'

export default combineReducers({
  counter,
  router,
  audio
})
