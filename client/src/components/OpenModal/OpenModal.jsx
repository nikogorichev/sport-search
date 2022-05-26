import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { costsRenderAC } from "../../redux/actionCreator/costsAC";
// import QuestCard from "../QuestCard/QuestCard";

const OpenModal = ({ active, setActive }) => {

  //ОТРАБАТЫВАЕТ ПРИ ОТПРАВКЕ ФОРМЫ В МОДАЛЬНОМ ОКНЕ

  const newEvent = (e) => {
    e.preventDefault();
    const event = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      members_count: e.target.members_count.value,
      cost: e.target.cost.value,
    }
    console.log(event)
  }

  return (
    <div className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}>
      <form
        //ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ МЕРОПРИЯТИЯ
        onSubmit={newEvent}
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h5>Добавить событие:</h5>
        <p class="card-title">Название:</p>
        <input type="text" name="title" />
        <p class="card-text">Дата мероприятия:</p>
        <input type="text" name="date" />
        <p class="card-text">Описание:</p>
        <input type="text" name="description" />
        <p class="card-text">Количество участников:</p>
        <input type="text" name="members_count" />
        <p class="card-text">Стоимость:</p>
        <input type="text" name="cost" />
        <button type="submit">
          Ответить
        </button>
      </form>
    </div>
  );
};

export default OpenModal;