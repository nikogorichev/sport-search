// redux/asyncAC/asyncUsersAC.js
import { addEventsAC, initEventsAC, deleteEventAC, editEventAC, } from "../actionCreators/eventAC"


export const fetchInitEvents = () => {
  // так же здесь можно прописать дополнительную логику,
  // которая сработает до следующего вызова dispatch.

  // Достаем events из БД для отрисовки ('/events')
  return (dispatch) => {
    fetch("/events")
      .then((res) => res.json())
      .then((data) => dispatch(initEventsAC(data)));

  }
}

export const fetchAddEvents = (event) => {

  // Записываем event в БД ('/events')
  return (dispatch) => {
    fetch("/events", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    })
      .then((res) => res.json())
      .then((data) => dispatch(addEventsAC(data)))
  }
}

export const fetchDeleteEvent = (event) => {

  // Удаляем event в БД ('/events')
  return (dispatch) => {
    fetch("/events", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    })
      .then((res) => res.json())
      .then((data) => dispatch(deleteEventAC(data)))
  }
}
  
export const fetchEditEvent = (event) => {

  // Изменяем event в БД ('/events')
  return (dispatch) => {
    fetch("/events", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event)
    })
      .then((res) => res.json())
    // .then((data) => console.log('DATA',data))
      .then((data) => dispatch(editEventAC(data)))
  }
}
