import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import './SportButton.css'

function Sport({ usersSports }) {
  return (
    <span className='sport-btn'>
      {usersSports.title}
      <IconButton aria-label="delete" size="small">
        <CloseIcon color='grey' />
      </IconButton>
    </span>
  );
}

export default Sport;
