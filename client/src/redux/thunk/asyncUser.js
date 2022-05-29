import { authUsersAC, logoutUserAC, fetchUserUpdateAC } from "../actionCreators/userAC"
import { initUsersSportsAC } from "../actionCreators/usersSportsAC"
export const getFetchUsersSports = () => {
  return (dispatch) => {
    fetch('/profile')
      .then(res => res.json())
      .then(data => dispatch(initUsersSportsAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const authUsersFetch = (data) => {
  return (dispatch) => {
    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const regUsersFetch = (data) => {
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const checkAuthFetch = () => {
  return (dispatch) => {
    fetch("/checkauth")
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const logoutFetch = () => {
  return (dispatch) => {
    fetch("/logout")
      .then(res => res.json())
      .then(data => dispatch(logoutUserAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const putFetchUser =(data)=>{
  return (dispatch)=>{
    fetch("/profile",{
      headers: {"content-type": "application/json"},
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => dispatch(fetchUserUpdateAC(data)))
    
  }
}
