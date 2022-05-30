import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { putFetchUser, postFetchUserPhoto } from '../../redux/thunk/asyncUser';
import SportButtonCross from './SportButtonCross';
import Button from '@mui/material/Button';



import './Profile.css'





function UpdateUser(props) {
  const { user } = useSelector(state => state.user)
  const { usersSports } = useSelector(state => state.usersSports);
  const { sports } = useSelector(state => state.events);
  const dispatch = useDispatch()


  // изменение имени, емайла и описания в профиле
  useEffect(() => {
    dispatch(putFetchUser())
  }, [dispatch]);

  const updateUser = (event) => {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      description: event.target.description.value,
      sport: event.target.sport
    }
    console.log(data)
    dispatch(putFetchUser(data))
  }

  // добавление фотографии в профиле
  // useEffect(() => {
  //   dispatch(postFetchUserPhoto())
  // }, [dispatch]);

  // const addUserPhoto = (event) => {
  //   const data = {
  //     photo: event.target.photo.value,
  //   }
  //   dispatch(postFetchUserPhoto(data))
  // }


  return (
    <div>
      <form action="/profile" onSubmit={updateUser}>
        {/* {user.photo.length > 0 && <>
          <img src={user.photo} alt="photo" /></>} */}
        <br />
        <div>Добавить фотографию:
          <br />
          <br />
          <input id="photo" name="myFile" type="file" />
        </div>
        <br />
        <p>Имя: <input id="name" defaultValue={user.name} /></p>
        <p>Email: <input id="email" defaultValue={user.email} /></p>
        <p>О себе: <input id="description" defaultValue={user.description} /></p>
        <p>Виды спорта: {usersSports.map(usersSports => <SportButtonCross key={usersSports.id} usersSports={usersSports} />)}  </p>
        <p >Добавить виды спорта:

          
        </p>
        <div className='btn-edit'>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
