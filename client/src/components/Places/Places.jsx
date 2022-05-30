import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlacesFetch } from '../../redux/thunk/placesAsync';
import Modal from './Modal/Modal';
import PlaceItem from './PlaceItem';

const Places = () => {
  const [isModal, setModal] = useState(false);
  const dispatch = useDispatch()
  const {places} = useSelector(state => state.places)
  const {images} = useSelector(state => state.places)
  
  const PlaceBox = styled(Box)(({ theme }) => ({
 

  }));
  
  useEffect(() => {
    dispatch(addPlacesFetch())
  }, [dispatch])

  return (
    <>
      <button onClick={() => setModal(true)}>Создать площадку</button>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
        />
     
     <PlaceBox>
        {places?.map((el) => {
          const placeImage = images.filter(image => image.place_id === el.id)
          return <PlaceItem place={el} key={el.id} images={placeImage}/>
         })}
         </PlaceBox>
    </>
  );
};

export default Places;
