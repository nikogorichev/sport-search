import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { usersSportsReducer } from './usersSportsReducer'
import { eventsReducer } from './eventsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  usersSports: usersSportsReducer,
  events: eventsReducer,
})
