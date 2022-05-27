import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getFetchUsersSports } from '../../redux/thunk/asyncUser';
import SportButton from './SportButton';
import { fetchInitEvents } from '../../redux/thunk/asyncEvents';
import EventCardCabinet from '../EventCardCabinet/EventCardCabinet'

function Profile() {
  const { user } = useSelector(state => state.user)
  const { usersSports } = useSelector(state => state.usersSports);
  const { events } = useSelector(state => state.events);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getFetchUsersSports())
  }, [dispatch]);
  
  //Достаем events из БД
  useEffect(() => {
    dispatch(fetchInitEvents())
  }, [dispatch]);
  
  console.log('ghfh',events, user);
  const userEvents = events.filter((el) => el.user_id === user.id)
  console.log('chel',userEvents)

  return (
    <>
    <div className=''>
      <h4>Личная информация:</h4>
        <img src='data:image/jpeg;base64,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' alt='Image'></img>
        <p>Имя: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Виды спорта: {usersSports.map(usersSports => <SportButton key={usersSports.id} usersSports={usersSports} />)}  </p>
        <p>О себе: {user.description}</p>
        <button >Изменить</button>
      </div>
      <div>
      <h4>Мои события:</h4>
        {userEvents.map((el) => <div>
          <EventCardCabinet key={el.id} event={el} />
        </div>
        )}
      </div>
      <div>
        
        {/* Я ЗДЕСЬ */}
        
        <h4>События, в которых я участвую:</h4>
        {userEvents.map((el) => <div>
          <EventCardCabinet key={el.id} event={el} />
        </div>
        )}
      </div>
</>
  );
}

export default Profile;
