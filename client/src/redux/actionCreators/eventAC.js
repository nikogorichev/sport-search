import { INIT_EVENTS, ADD_EVENTS, DELETE_EVENT } from "../actionTypes/eventsAT";

export const initEventsAC = (payload) => {
  return {
    type: INIT_EVENTS,
    payload
  }
}

export const addEventsAC = (payload) => {
  return {
    type: ADD_EVENTS,
    payload
  }
}

export const deleteEventAC = (payload) => {
  return {
    type: DELETE_EVENT,
    payload
  }
}