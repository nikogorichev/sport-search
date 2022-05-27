import { initUsersAC, authUsersAC } from "../actionCreators/userAC"

export const getFetchUsers = () => {

  return (dispatch) => {
    fetch('/profile')
      .then(res => res.json())
      .then(data => dispatch(initUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const authUsersFetch = (data) => {
  return (dispatch) => {
    fetch("/login",{
      headers: {"content-type": "application/json"},
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
    fetch("/registration",{
      headers: {"content-type": "application/json"},
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
    .then(data => dispatch(authUsersAC(data)))
    .catch(err => console.log(err.message))
  }
}

