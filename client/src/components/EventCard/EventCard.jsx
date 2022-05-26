import React from 'react';

function EventCard({event}) {

  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <p class="card-text">Дата мероприятия:{event.date}</p>
        <p class="card-text">Описание:{event.description}</p>
        <p class="card-text">Количество участников:{event.members_count}</p>
        <p class="card-text">Стоимость:{event.cost}</p>
      </div>
    </div>
  );
}

export default EventCard;