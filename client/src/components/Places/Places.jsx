import { Box, Checkbox, FormControlLabel, FormGroup, styled } from '@mui/material';
import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlacesFetch } from '../../redux/thunk/placesAsync';
import Modal from './Modal/Modal';
import PlaceItem from './PlaceItem';
import './Places.css'
import PlacesMap from '../PlacesMap/PlacesMap';

const Places = () => { 
  const [map, setMap] = useState(false);
  const [isModal, setModal] = useState(false);
  const dispatch = useDispatch()
  const { places } = useSelector(state => state.places)
  const { images } = useSelector(state => state.places)

  const PlaceBox = styled(Box)(({ theme }) => ({

  }));

  useEffect(() => {
    dispatch(addPlacesFetch())
  }, [dispatch])

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% )", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add onClick={() => setModal(true)}></Add>
        </Fab>
      </Tooltip>

      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Показать площадки на карте"
          onChange={() => setMap(!map)}
        />
      </FormGroup>

      {map ? (<><PlacesMap map={map}/></>) : (
        <>
        <PlaceBox>
        {places?.map((el) => {
          const placeImage = images.filter(image => image.place_id === el.id)
          return <PlaceItem place={el} key={el.id} images={placeImage} />
        })}
      </PlaceBox>
        </>
      )}

      
    </>
  );
};

export default Places;
