import { INIT_USERS} from "../actionTypes/userAT"

export const initUsersAC = (payload) => {
  return {
    type: INIT_USERS,
    payload
  }
}
