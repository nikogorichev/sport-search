/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Container
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import { addPlacesFetch, getPlacesFetch } from '../../redux/thunk/placesAsync';

function PlacesMap() {
  const { places } = useSelector((state) => state.places);
 
  

  const [state, setState] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPlacesFetch());
  }, [dispatch]);

  let myMap;
  const initMap = () => {
    window.ymaps.ready(() => {
      if (places.length) {
        myMap = new window.ymaps.Map('map', {
          center: [59.97, 30.35],
          zoom: 10,
          controls: [
            'zoomControl',
            'searchControl',
            'fullscreenControl',
            'routeButtonControl',
          ],
        });
        
        
          places?.map((el) => {
            ymaps
              .geocode(el.address, {
                // boundedBy: myMap.getBounds(),
              })
              
              .then(function (res) {
                let firstGeoObj = res.geoObjects.get(0);
              
                let coords = firstGeoObj.geometry.getCoordinates();
                const myPlacemark = new ymaps.Placemark(
                  coords,
                  {
                    hintContent: el.title,
                    balloonContentHeader: `${el.title}`,
                    balloonContentBody: `${el.description}`,
                    // balloonContentBody: `<img src="${el.description}" alt="event_pic" height="170">`,
                    balloonContentFooter: `<br>${el.address
                      }<br><a href="/event/${el.id}">Посмотреть подробнее</a>`,
                  },
                  {
                    iconLayout: 'default#image',
                    iconImageSize: [45, 45],
                  }
                );

                myMap?.geoObjects.add(myPlacemark);
              });
          });
        
      }
    });
  };

  useEffect(() => {
    initMap();

    return () => {
      myMap?.destroy();
    };
  }, [myMap, state, places]);
  return (
    <Container>
      <Typography variant="h4" sx={{ py: 2 }}>
        Карта мероприятий:
      </Typography>
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Показать площадки"
          onChange={() => setState(!state)}
        />
      </FormGroup>
      <Box id="map" sx={{ height: 600, mb: 5 }}></Box>
    </Container>
  );
}

export default PlacesMap;
