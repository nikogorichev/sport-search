import { INIT_USERS, EDIT_USER, AUTH_USER, LOGOUT_USER} from "../actionTypes/userAT"

export const initUsersAC = (payload) => {
  return {
    type: INIT_USERS,
    payload
  }
}
export const fetchUserUpdateAC=(payload)=>{
  return {
    type:EDIT_USER,
    payload
  }
}
export const authUsersAC = (payload) => {
  return {
    type: AUTH_USER,
    payload
  }
}

export const logoutUserAC = (payload) => {
  return {
    type: LOGOUT_USER,
    payload
  }
}

