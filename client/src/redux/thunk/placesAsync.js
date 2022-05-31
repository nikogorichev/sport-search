import { addPlacesAC, newPlacesAC } from "../actionCreators/placesAC";

export const addPlacesFetch = () => {
  return (dispatch) => {
    fetch('/place')
    .then(response => response.json())
    .then(data => dispatch(addPlacesAC(data)))
  }
}

export const newPlacesFetch = (data) => {
  return(value) => {
    fetch('/place', {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => value(newPlacesAC(data)))
  }
}



