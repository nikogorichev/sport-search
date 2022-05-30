import React from 'react';
import './SportButton.css'

function Sport({ usersSports }) {
  return (
    <span className='sport-btn'>
      {usersSports.title}
    </span>
  );
}

export default Sport;
