import { GET_PLACES} from "../actionTypes/placesAT"

const initialState = { address: [] }

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES:
      return { ...state, address: action.payload }

    default:
      return state
  }

}