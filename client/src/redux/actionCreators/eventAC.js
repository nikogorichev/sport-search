import { INIT_EVENTS, ADD_EVENTS } from "../actionTypes/eventsAT";

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