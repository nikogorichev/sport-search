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
  console.log(places);
  
  useEffect(() => {
    dispatch(addPlacesFetch())
  }, [dispatch])

  return (
    <>
     {places?.map((el) => {
       return <PlaceItem place={el} key={el.id}/>
      })}
      <button onClick={() => setModal(true)}>Создать площадку</button>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
     
    </>
  );
};

export default Places;