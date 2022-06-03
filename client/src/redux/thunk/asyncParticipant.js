import { addParticipantAC, deleteParticipantAC } from "../actionCreators/participantAC"


export const fetchAddParticipant = (participant) => {

  // Записываем participant в БД ('/participant')
  return (dispatch) => {
    fetch("/participant", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participant)
    })
      .then((res) => res.json())
      .then((data) => dispatch(addParticipantAC(data)))
  }
}

export const fetchDeleteParticipant = (participant) => {
  // Удаляем participant из БД ('/participant')
  return (dispatch) => {
    fetch("/participant", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participant)
    })
      .then((res) => res.json())
      .then((data) => dispatch(deleteParticipantAC(data)))
  }
}
