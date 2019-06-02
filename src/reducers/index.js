import { combineReducers } from 'redux'
import answersReducer from './answersReducer'
import appStateReducer from './appStateReducer'

export default combineReducers({
  answersReducer,
  appStateReducer,
})