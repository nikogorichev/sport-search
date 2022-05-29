import { combineReducers } from 'redux'
import { placeReducer } from './placeReducer'
import { userReducer } from './userReducer'
import { usersSportsReducer } from './usersSportsReducer'
import { eventsReducer } from './eventsReducer'
// import { participantsReducer } from './participantReducer'


export const rootReducer = combineReducers({
  places: placeReducer,
  user: userReducer,
  usersSports: usersSportsReducer,
  events: eventsReducer,
  // participants: participantsReducer,
})
