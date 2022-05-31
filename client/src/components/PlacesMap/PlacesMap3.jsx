/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPlacesFetch } from '../../redux/thunk/placesAsync.js';
import style from './Map.module.css';


function PlacesMap() {
  const navigate = useNavigate();
  const [myMap, setmyMap] = useState({})
  const dispatch = useDispatch()
  const { places } = useSelector(state => state.places);
  const [state, setState] = useState(true)

  useEffect(() => {
    dispatch(getPlacesFetch())
  }, [dispatch])

  useEffect(() => {
    if (places.length && state) {
      initMap()
    };
  }, [places]);

  useEffect(() => {
    addMarks()
  }, [myMap])



  function initMap() {
    window.ymaps.ready(() => {
      const myMapS = new window.ymaps.Map(
        'map',
        {
          center: [59.92, 30.33],
          zoom: 12,
          controls: [
            'zoomControl',
            'searchControl',
            'fullscreenControl',
            'routeButtonControl',
          ],
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )
      setmyMap(myMapS)
    })
    setState(false)
  };

  function addMarks() {
    places.map((rest) => {
      window.ymaps
        .geocode(places.address, {
          // boundedBy: myMap.getBounds(),
        })
        .then((res) => {
          const firstGeoObj = res.geoObjects.get(0);
          const coords = firstGeoObj.geometry.getCoordinates();
          const myPlacemark = new window.ymaps.Placemark(
            coords,
            {
              hintContent: rest.title,
              balloonContentHeader: `${rest.title}`,
              balloonContentBody: `${rest.description} <br>
                 <img src="${rest.img}" alt="event_pic" width=200 height="150">`,
              balloonContentFooter: `адрес: ${rest.address}`,
            },
            {
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38],
            }
          );
          myMap.geoObjects.add(myPlacemark);
        })
    })
  };



  return (
    <>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h3 className={style.text}>Тут все площадки</h3>
          <div className={style.extraText}>
            Все площадки города на карте в удобном формате
          </div>
        </div>
        <div className={style.headerRight}>
          <div className={style.buttons}>
            <button onClick={() => navigate(-1)} className={style.buttonLeft} type="submit">
              Список
            </button>
            <button className={style.buttonRight} type="submit">
              Карта
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div>
          <button onClick={() => navigate(-1) } className={style.buttonRight} type="submit">Список участников</button>
      </div>  */}
        <div className={style.map} id="map" />
      </div>
    </>
  )
}

export default PlacesMap;
