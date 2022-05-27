import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { usersSportsReducer } from './usersSportsReducer'
import { eventsReducer } from './eventsReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  usersSports: usersSportsReducer,
  events: eventsReducer,
  user: userReducer
})
