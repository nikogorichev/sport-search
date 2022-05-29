import React from 'react';

function EventCardCabinet({ event }) {

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text">Дата мероприятия:{event.date}</p>
        <p class="card-text">Описание:{event.description}</p>
        <p class="card-text">Количество участников:{event.members_count}</p>
        <p class="card-text">Стоимость:{event.cost}</p>
      </div>
      <button>Изменить</button>
      <button>Удалить</button>
    </div>
  );
}

export default EventCardCabinet;