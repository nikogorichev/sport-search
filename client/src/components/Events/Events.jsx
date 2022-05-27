import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitEvents } from '../../redux/thunk/asyncEvents';
import EventCard from '../EventCard/EventCard';
import OpenModal from '../OpenModal/OpenModal';


function Events(props) {

  const dispatch = useDispatch();
  const { events } = useSelector(state => state.events)
  
  const [modalActive, setModalActive] = useState(false);
  //Достаем массив с events/мероприятиями
  useEffect(() => {
    dispatch(fetchInitEvents())
  }, [dispatch]);
  
  console.log('ONO', events)
  return (
    <div>
      <h6>EVENTS</h6>
      <div>
        <button onClick={() => setModalActive(true)}>Добавить мероприятие</button>
        <OpenModal
          active={modalActive}
          setActive={setModalActive}
        />
      </div>
      {events?.map((el) => <EventCard key={ el.id } event={ el }/> )}
    </div>
  );
}

export default Events;