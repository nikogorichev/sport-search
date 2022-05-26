import { initUsersAC} from "../actionCreators/userAC"
import {initUsersSportsAC } from "../actionCreators/usersSportsAC"

export const getFetchUsers = () => {

  return (dispatch) => {
    fetch('/profile')
      .then(res => res.json())
      .then(data => dispatch(initUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const getFetchUsersSports = () => {

  return (dispatch) => {
    fetch('/profile')
      .then(res => res.json())
      .then(data => dispatch(initUsersSportsAC(data)))
      .catch(err => console.log(err.message))
  }
}

