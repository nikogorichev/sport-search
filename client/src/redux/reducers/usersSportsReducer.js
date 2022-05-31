import { INIT_USERS_SPORTS, DELETE_USERS_SPORTS, ADD_USER_SPORT } from "../actionTypes/usersSportsAT"

const initialState = { usersSports: [] }

export const usersSportsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_USERS_SPORTS:
      return { ...state, usersSports: action.payload[0].Sports }

    case DELETE_USERS_SPORTS:
      return { ...state, usersSports: state.usersSports.filter(el => el.id !== action.payload.id) }

    case ADD_USER_SPORT:
      return { ...state, usersSports: [...state.usersSports, action.payload] }

    default:
      return state

  }
}
