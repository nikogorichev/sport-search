import { INIT_EVENTS, ADD_EVENTS, DELETE_EVENT, EDIT_EVENT, } from
  '../actionTypes/eventsAT'
import { ADD_PARTICIPANT, DELETE_PARTICIPANT } from '../actionTypes/participantAT';


const initialState = { events: [], sports: [], places: [], participants: [], allParticipants: [] }

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_EVENTS:
      return {
        ...state,
        events: action.payload.events,
        sports: action.payload.sports,
        places: action.payload.places,
        participants: action.payload.participants,
        allParticipants: action.payload.allParticipants,
        userEvents: action.payload.userEvents
      }

    case ADD_EVENTS:
      return { ...state, events: [...state.events, action.payload] }

    case ADD_PARTICIPANT:
      // console.log('fact1', state.participants)
      
      return { ...state, participants: [...state.participants, action.payload], allParticipants: [...state.allParticipants, action.payload] }


    case DELETE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(el => el.EventId !== action.payload.event_id),
        // фильтр если юзер или мероприятие не соответствует пришедшему объекту
        allParticipants: state.allParticipants.filter(el => (el.EventId !== action.payload.event_id) || (el.user_id !== action.payload.user_id)),
        userEvents: state.userEvents.filter(el => el.id !== action.payload.event_id)
      }

    case DELETE_EVENT:
      return {
        ...state, events: state.events.filter(el => el.id !== action.payload.event_id),
      }


    case EDIT_EVENT:
      return {
        ...state, events: state.events.map(el => {
          if (el.id === action.payload.id) {
            return {
              ...el, title: action.payload.title,
              date: action.payload.date,
              description: action.payload.description,
              members_count: action.payload.members_count,
              cost: action.payload.cost,
              user_id: action.payload.user_id,
              sport_id: action.payload.sport_id,
              place_id: action.payload.place_id,
            }
          } else {
            return el
          }
        })
      }

    default:
      return state
  }
}
