import { INIT_USERS_SPORTS } from "../actionTypes/usersSportsAT"

export const initUsersSportsAC = (payload) => {
  return {
    type: INIT_USERS_SPORTS,
    payload
  }
}
