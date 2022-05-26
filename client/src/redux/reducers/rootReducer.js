import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { usersSportsReducer } from './usersSportsReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  usersSports: usersSportsReducer,
})
