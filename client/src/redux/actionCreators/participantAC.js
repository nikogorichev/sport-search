import { ADD_PARTICIPANT, DELETE_PARTICIPANT } from "../actionTypes/participantAT";

export const addParticipantAC = (payload) => {
  return {
    type: ADD_PARTICIPANT,
    payload
  }
}

export const deleteParticipantAC = (payload) => {
  return {
    type: DELETE_PARTICIPANT,
    payload
  }
}