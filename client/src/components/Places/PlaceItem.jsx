import React from 'react';



const PlaceItem = ({place}) => {
  return (
    <div>
      <div className='placeTitle'>{place.title}</div>
      <div>{place.address}</div>
      <div>{place.description}</div>
    </div>
  );
};



export default PlaceItem;

