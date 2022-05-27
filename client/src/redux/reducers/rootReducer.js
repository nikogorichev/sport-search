import { combineReducers } from 'redux'
import { placeReducer } from './placeReducer'
import { userReducer } from './userReducer'
import { usersSportsReducer } from './usersSportsReducer'
import { eventsReducer } from './eventsReducer'


export const rootReducer = combineReducers({
  places: placeReducer,
  user: userReducer,
  usersSports: usersSportsReducer,
  events: eventsReducer,
})
