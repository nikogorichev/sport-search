import { addPlacesAC, getPlacesAC, newPlacesAC } from "../actionCreators/placesAC";

export const addPlacesFetch = () => {
  return (dispatch) => {
    fetch('/place')
      .then(response => response.json())
      .then(data => dispatch(addPlacesAC(data)))
  }
}

export const getPlacesFetch = () => {
  return (dispatch) => {
    fetch('/placesmap')
      .then(response => response.json())
      .then(data => dispatch(getPlacesAC(data)))
  }
}

export const newPlacesFetch = (data) => {
  return (value) => {
    fetch('/place', {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => value(newPlacesAC(data)))
  }
}




