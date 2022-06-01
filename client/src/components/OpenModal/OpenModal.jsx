import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddEvents } from "../../redux/thunk/asyncEvents";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const OpenModal = ({ active, setActive }) => {
  const [imageURL, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { sports } = useSelector(state => state.events)
  const { places } = useSelector(state => state.events)
  
  const handleImageUpload = (event, setImg) => {
    const imageData = new FormData();
    imageData.set("key", "ca5482cb4e564b594544191602467167");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //ОТРАБАТЫВАЕТ ПРИ ОТПРАВКЕ ФОРМЫ В МОДАЛЬНОМ ОКНЕ
  const newEvent = (e) => {
    e.preventDefault();
    const event = {
      title: e.target.title.value,
      date: e.target.date.value,
      description: e.target.description.value,
      members_count: e.target.members_count.value,
      user_id: user.id,
      sport_id: e.target.sport_id.value,
      place_id: e.target.place_id.value,
      cost: e.target.cost.value,
      image: imageURL,
      phone: e.target.phone.value,
    }
    dispatch(fetchAddEvents(event))
    setActive(false)
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
        <input type="datetime-local" name="date" />
        <p class="card-text">Описание:</p>
        <input type="text" name="description" />
        <p class="card-text">Количество участников:</p>
        <input type="text" name="members_count" />
        <p class="card-text">Способ связи:</p>
        <input type="text" name="phone" />
        <p class="card-text">Вид спорта:</p>
        <select name="sport_id">
          {sports.map((el) => <option>{ el.title }</option>)}
        </select>
        <p class="card-text">Место проведения:</p>
        <select name="place_id">
          {places.map((el) => <option>{el.title}</option>)}
        </select>
        <p class="card-text">Стоимость:</p>
        <input type="text" name="cost" defaultValue={0}/>
        <input
            id="img"
            type="file"
            onChange={(e) => handleImageUpload(e, setImageUrl)}
          />
        <button type="submit">
          Ответить
        </button>
      </form>
    </div>
  );
};

export default OpenModal;
