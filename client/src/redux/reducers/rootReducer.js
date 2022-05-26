import { combineReducers } from 'redux'
import { placeReducer } from './placeReducer'

export const rootReducer = combineReducers({
  places: placeReducer,
})
