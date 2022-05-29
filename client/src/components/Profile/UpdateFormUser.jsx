import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { putFetchUser } from '../../redux/thunk/asyncUser';
import SportButtonCross from './SportButtonCross';
import Button from '@mui/material/Button';
import SportCheckbox from './SportCheckbox'
import './Profile.css'

function UpdateUser() {
  const { user } = useSelector(state => state.user)
  const { usersSports } = useSelector(state => state.usersSports);
  // const { sports } = useSelector(state => state.events);
  // console.log(sports);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(putFetchUser())
  }, [dispatch]);

  const updateUser = (event) => {
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      description: event.target.description.value
    }
    console.log(data)
    dispatch(putFetchUser(data))

  }
  return (
    <div>
      <form action="/profile" onSubmit={updateUser}>
        <br />
        <div>Добавить фотографию:
          <br />
          <br />
          <input name="myFile" type="file" />
        </div>
        <br />
        <p>Имя: <input id="name" defaultValue={user.name} /></p>
        <p>Email: <input id="email" defaultValue={user.email} /></p>
        <p>О себе: <input id="description" defaultValue={user.description} /></p>
        <p>Виды спорта: {usersSports.map(usersSports => <SportButtonCross key={usersSports.id} usersSports={usersSports} />)}  </p>
        <p>Добавить виды спорта:
          <SportCheckbox></SportCheckbox>
        </p>
        <div className='btn-edit'>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
