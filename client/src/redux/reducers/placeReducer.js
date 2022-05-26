import { ADD_PLACES } from "../actionTypes/placesAT"

const initialState = { places: [] }

export const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      return { ...state, places: action.payload }
    default:
      return state
  }

}