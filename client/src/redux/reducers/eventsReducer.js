import { INIT_EVENTS, ADD_EVENTS, } from
  '../actionTypes/eventsAT'
import { ADD_PARTICIPANT, DELETE_PARTICIPANT } from '../actionTypes/participantAT';


const initialState = { events: [], sports: [], places: [], participants: [], allParticipants: [] }

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EVENTS:
      return { ...state, events: action.payload.events, sports: action.payload.sports, places: action.payload.places, participants: action.payload.participants, allParticipants: action.payload.allParticipants, userEvents: action.payload.userEvents }

    case ADD_EVENTS:
      return { ...state, events: [...state.events, action.payload] }
    
    case ADD_PARTICIPANT:
      console.log('fact1', state.participants)
      
      return { ...state, participants: [...state.participants, action.payload], allParticipants: [...state.allParticipants, action.payload] }
      
      case DELETE_PARTICIPANT:
      // console.log('fact', state.participants[0].EventId)
      // console.log('fact3', action.payload.event_id)
      // console.log('fact4', state.participants)
      // console.log('fact2', state.participants.filter(el => el.EventId !== action.payload.event_id))
        // && el.EventId != action.payload.event_id
      return {
        ...state, participants: state.participants.filter(el => el.EventId !== action.payload.event_id), allParticipants: state.allParticipants.filter(el => el.EventId !== action.payload.event_id), userEvents: state.userEvents.filter(el => el.id !== action.payload.event_id)
    }

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
