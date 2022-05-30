import { ADD_PLACES, NEW_PLACES } from "../actionTypes/placesAT"

const initialState = { places: [], images: [] }

export const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      return { ...state, places: action.payload[0], images: action.payload[1], }

      case NEW_PLACES: 
      return {...state, places: [...state.places, action.payload[0]], images: [...state.images.concat(action.payload[1]) ]}
    default:
      return state
  }

}
