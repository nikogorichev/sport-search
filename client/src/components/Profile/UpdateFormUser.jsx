import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { putFetchUser } from '../../redux/thunk/asyncUser';
import SportButtonCross from './SportButtonCross';

function UpdateUser() {
  const { user } = useSelector(state => state.user)
  const { usersSports } = useSelector(state => state.usersSports);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(putFetchUser())
  }, [dispatch]);

  const updateUser = (event) => {
    event.preventDefault()
    const data = {
      id: user.id, 
      name: event.target.name.value, 
      email: event.target.email.value,
      description: event.target.description.value
    }
    console.log(data)
    dispatch(putFetchUser(data))
  }
  return (
    <div>
      <form action="/profile">
      <div>Добавить фотографию: <input name="myFile" type="file" /></div>
          <p>Имя: <input id="name" defaultValue={user.name} /></p>
          <p>Email: <input id="email" defaultValue={user.email} /></p>
          <p>О себе: <input id="description" defaultValue={user.description} /></p>
          <p>Виды спорта: {usersSports.map(usersSports => <SportButtonCross key={usersSports.id} usersSports={usersSports} />)}  </p>
          <p>Добавить виды спорта: </p>
          <button onClick={updateUser}>Сохранить</button>
      </form>
    </div>
  );
}

export default UpdateUser;
