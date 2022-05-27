import { combineReducers } from 'redux'
import { eventsReducer } from './eventsReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  events: eventsReducer,
  user: userReducer
})
