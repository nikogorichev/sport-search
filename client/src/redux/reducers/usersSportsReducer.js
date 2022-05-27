import { INIT_USERS_SPORTS } from "../actionTypes/usersSportsAT"

const initialState = { usersSports: [] }

export const usersSportsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_USERS_SPORTS:
      return { ...state, usersSports: action.payload[0].Sports }
    default:
      return state
  }
}
