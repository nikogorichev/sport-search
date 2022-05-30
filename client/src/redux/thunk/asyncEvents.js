// redux/asyncAC/asyncUsersAC.js
import { addEventsAC, initEventsAC } from "../actionCreators/eventAC"


export const fetchInitEvents = () => {
  // так же здесь можно прописать дополнительную логику,
  // которая сработает до следующего вызова dispatch.

  // Достаем events из БД для отрисовки ('/events')
  return (dispatch) => {
    fetch("/events")
      .then((res) => res.json())
      .then((data) => dispatch(initEventsAC(data)));
      // .then((data) => console.log('БЭК', data))

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
  
