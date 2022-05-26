import { INIT_USERS, AUTH_USER } from "../actionTypes/userAT"

const initialState = { user: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_USERS:
      return { ...state, user: action.payload.allUsers }

    case AUTH_USER: {
      return {...state, user: action.payload}
    }
      
      default:
        return state
    }
  }
