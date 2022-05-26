import { ADD_PLACES } from "../actionTypes/placesAT"

export const addPlacesAC = (payload) => {
  return {
    type: ADD_PLACES,
    payload
  }
}