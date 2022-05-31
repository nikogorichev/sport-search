import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditEvent } from "../../redux/thunk/asyncEvents";
import { useNavigate } from 'react-router-dom'

const OpenModalEdit = ({ active, setActive, event }) => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector(state => state.events)
  const { places } = useSelector(state => state.events)

  //ОТРАБАТЫВАЕТ ПРИ ОТПРАВКЕ ФОРМЫ В МОДАЛЬНОМ ОКНЕ
  const editEvent = (e) => {
    e.preventDefault();
    const editEvent = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      members_count: e.target.members_count.value,
      user_id: user.id,
      sport_id: e.target.sport_id.value,
      place_id: e.target.place_id.value,
      cost: e.target.cost.value,
      event: event.id,
    }
    console.log('EVENT',editEvent)
    dispatch(fetchEditEvent(editEvent))
    setActive(false)
  }

  return (
    <div className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <form
        //ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ МЕРОПРИЯТИЯ
        onSubmit={ editEvent }
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h5>Изменить событие:</h5>
        <p class="card-title">Название:</p>
        <input type="text" name="title" defaultValue={event.title}/>
        <p class="card-text">Дата мероприятия:</p>
        <input type="datetime-local" name="date" defaultValue={event.date}/>
        <p class="card-text">Описание:</p>
        <input type="text" name="description" defaultValue={event.description}/>
        <p class="card-text">Количество участников:</p>
        <input type="text" name="members_count" defaultValue={event.members_count}/>
        <p class="card-text">Вид спорта:</p>
        <select name="sport_id">
          {sports.map((el) => <option>{el.title}</option>)}
        </select>
        <p class="card-text">Место проведения:</p>
        <select name="place_id">
          {places.map((el) => <option>{el.title}</option>)}
        </select>
        <p class="card-text">Стоимость:</p>
        <input type="text" name="cost" defaultValue={event.cost}/>
        <button type="submit">
          Ответить
        </button>
      </form>
    </div>
  );
};

export default OpenModalEdit;