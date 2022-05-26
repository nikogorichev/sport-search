import { INIT_USERS } from "../actionTypes/userAT"

const initialState = { user: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_USERS:
      return { ...state, user: action.payload.allUsers }
      default:
        return state
    }
  }
