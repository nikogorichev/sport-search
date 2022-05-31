import { ADD_PLACES, NEW_PLACES, GET_PLACES } from "../actionTypes/placesAT"

export const addPlacesAC = (payload) => {
  return {
    type: ADD_PLACES,
    payload
  }
}
export const getPlacesAC = (payload) => {
  return {
    type: GET_PLACES,
    payload
  }
}

export const newPlacesAC = (payload) => {
  return {
    type: NEW_PLACES,
    payload
  }
}