import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import './SportButton.css'
// import { deleteSportFetchUser } from '../../redux/thunk/asyncUser';

function Sport({ usersSports }) {


  const deleteUsersSport = () => {
    fetch(`/profile/${usersSports.id}` ,{
      headers: {"content-type": "application/json"},
      method: 'DELETE',
    })
  }

  return (
    <span className='sport-btn' >
      {usersSports.title}
      <IconButton onClick={deleteUsersSport} aria-label="delete" size="small">
        <CloseIcon color='grey' />
      </IconButton>
    </span>
  );
}

export default Sport;
