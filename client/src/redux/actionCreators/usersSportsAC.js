import { INIT_USERS_SPORTS, DELETE_USERS_SPORTS, ADD_USER_SPORT } from "../actionTypes/usersSportsAT"

export const initUsersSportsAC = (payload) => {
  return {
    type: INIT_USERS_SPORTS,
    payload
  }
}

export const deleteUsersSportsAC = (payload) => {
  return {
    type: DELETE_USERS_SPORTS,
    payload
  }
}

export const addUserSportsAC = (payload) => {
  return {
    type: ADD_USER_SPORT,
    payload
  }
}
