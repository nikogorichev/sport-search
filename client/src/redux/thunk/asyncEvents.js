// redux/asyncAC/asyncUsersAC.js
import { initEventsAC } from "../actionCreators/eventAC"


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

export const fetchAddEvents = () => {

  // Записываем event в БД ('/events')
  // return (dispatch) => {
  //   fetch("/events", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({

  //     })
  //   }
  //     .then((res) => res.json())
  //     .then((data) => dispatch(initEventsAC(data))))
  // }
}
  
