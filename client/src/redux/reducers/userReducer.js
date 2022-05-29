import { INIT_USERS,EDIT_USER, AUTH_USER, LOGOUT_USER } from "../actionTypes/userAT"

const initialState = { user: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_USERS:
      return { ...state, user: action.payload.allUsers }

    case EDIT_USER:
        console.log(action.payload)
        return {
          ...state, user: state.user.filter(user => {
            if (user.id === action.payload.id) {
              user.name = action.payload.name
              user.email = action.payload.email
              user.description = action.payload.description
            }
            return user
          })
        }

    case AUTH_USER: {
      return {...state, user: action.payload}
    }

    case LOGOUT_USER: {
      return {...state, user: action.payload}
    }
      
      default:
        return state
    }
  }
