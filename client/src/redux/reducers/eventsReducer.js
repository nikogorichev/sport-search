// userReducer
import { INIT_EVENTS, ADD_EVENTS } from
  '../actionTypes/eventsAT'

const initialState = { events: [] }

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EVENTS:
      return { ...state, events: action.payload }

    case ADD_EVENTS:
      return { ...state, events: [...state.events, action.payload] }

    // case DELETE_STUDENT:
    //   return { ...state, students: state.students.filter(el => el.id !== action.payload) }

    // case UPDATE_STUDENT:
    //   return {
    //     ...state, students: state.students.map(el => {
    //       if (el.id === action.payload.id) {
    //         return { ...el, name: action.payload.name, phase: action.payload.phase }
    //       } else {
    //         return el
    //       }
    //     })
    //   }

    default:
      return state
  }
}
