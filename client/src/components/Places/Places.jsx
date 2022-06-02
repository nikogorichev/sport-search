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
import OpenModal from '../OpenModal/OpenModal';
import PlaceModal from '../Placemodal/PlaceModal';

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
        title="Добавить"
        sx={{
          backgroundColor: "black",
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% )", md: 15 },
        }}
      >
        <Fab sx={{
          backgroundColor: "black",
          color: "white",
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% )", md: 15 },
        }}
          
        >
          <Add onClick={() => setModal(true)}></Add>
      
          <PlaceModal active={isModal} setActive={setModal} />
        </Fab>
      </Tooltip>
      {/* <Modal
        active={isModal}
        setActive={setModal}
        title="Modal Title"
      onClose={() => setModal(false)}
      /> */}

      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <FormGroup sx={{ mb: 2}}>
        <FormControlLabel
          control={<Checkbox />}
          label="Показать площадки на карте"
          onChange={() => setMap(!map)}
        />
        
      </FormGroup>
      </Box>
      {map ? (<><PlacesMap map={map} /></>) : (
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
