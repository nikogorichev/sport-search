/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Container
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import { addPlacesFetch} from '../../redux/thunk/placesAsync';

import { useNavigate } from 'react-router-dom';


function PlacesMap() {
  const { places } = useSelector((state) => state.places);
  const { images } = useSelector((state) => state.places);
  const navigation = useNavigate();

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
            const placeImage = images.filter(image => image.place_id === el.id)
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
                    
                    balloonContentBody: `<br><img src="${placeImage[0].url}" alt="event_pic" height="100"><br>${el.description}`,
                    balloonContentFooter: `<br>${el.address
                      }<br><a href="/place/${el.id}">Посмотреть подробнее</a>`,
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



  // let myMap;
  // const initMap = () => {
  //   window.ymaps.ready(() => {
  //     if (places.length) {
  //       myMap = new window.ymaps.Map('map', {
  //         center: [59.97, 30.35],
  //         zoom: 10,
  //         controls: [
  //           'zoomControl',
  //           'searchControl',
  //           'fullscreenControl',
  //           'routeButtonControl',
  //         ],
  //       });
        
        
  //         places?.map((el) => {
  //           const placeImage = images.filter(image => image.place_id === el.id)
  //           ymaps
  //             .geocode(el.address, {
  //               // boundedBy: myMap.getBounds(),
  //             })
              
  //             .then(function (res) {
  //               let firstGeoObj = res.geoObjects.get(0);
              
  //               let coords = firstGeoObj.geometry.getCoordinates();
  //               const myPlacemark = new ymaps.Placemark(
  //                 coords,
  //                 {
  //                   hintContent: el.title,
  //                   balloonContentHeader: `${el.title}`,
                    
  //                   balloonContentBody: `<br><img src="${placeImage[0].url}" alt="event_pic" height="100"><br>${el.description}`,
  //                   balloonContentFooter: `<br>${el.address
  //                     }<br><a href="/place/${el.id}">Посмотреть подробнее</a>`,
  //                 },
  //                 {
  //                   iconLayout: 'default#image',
  //                   iconImageSize: [45, 45],
  //                 }
  //               );

  //               myMap?.geoObjects.add(myPlacemark);
  //             });
  //         });
        
  //     }
  //   });
  // };

  useEffect(() => {
    initMap();

    return () => {
      myMap?.destroy();
    };
  }, [myMap, state, places]);
  return (
    <Container>
      <Typography variant="h4" sx={{ py: 2 }}>
        Карта площадок:
      </Typography>
      
      <Box id="map" sx={{ height: 600, mb: 5 }}></Box>
    </Container>
  );
}

export default PlacesMap;
