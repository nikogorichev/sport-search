import { addPlacesAC } from "../actionCreators/placesAC";

export const addPlacesfetch = () => {
  return (dispatch) => {
    fetch('/place')
    .then(response => response.json())
    .then(data => dispatch(addPlacesAC(data)))
  }
}