// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getPlacesFetch } from '../../redux/thunk/placesAsync.js';
// import style from './Map.module.css';


// function PlacesMap() {
//   const navigate = useNavigate();
//   const [myMap, setmyMap] = useState({})
//   const dispatch = useDispatch()
//   const { places } = useSelector(state => state.places);
//   const [state, setState] = useState(true)

//   useEffect(() => {
//     dispatch(getPlacesFetch());
//   }, [dispatch])

//   useEffect(() => {
//     if (places.length && state) {
//       initMap()
//     };
//   }, [places]);

//   useEffect(() => {
//     addMarks()
//   }, [myMap])



//   function initMap() {
//     window.ymaps.ready(() => {
//       const myMapS = new window.ymaps.Map(
//         'map',
//         {
//           center: [59.92, 30.33],
//           zoom: 12,
//           controls: [
//             'zoomControl',
//             'searchControl',
//             'fullscreenControl',
//             'routeButtonControl',
//           ],
//         },
//         {
//           searchControlProvider: 'yandex#search',
//         }
//       )
//       setmyMap(myMapS)
//     })
//     setState(false)
//   };

//   function addMarks() {
//     places.map((rest) => {
//       window.ymaps
//         .geocode(rest.adress, {
//           // boundedBy: myMap.getBounds(),
//         })
//         .then((res) => {
//           const firstGeoObj = res.geoObjects.get(0);
//           const coords = firstGeoObj.geometry.getCoordinates();
//           const myPlacemark = new window.ymaps.Placemark(
//             coords,
//             {
//               hintContent: rest.title,
//               balloonContentHeader: `${rest.title}`,
//               balloonContentBody: `${rest.description} <br>
//                  <img src="${rest.img}" alt="event_pic" width=200 height="150">`,
//               balloonContentFooter: `адрес: ${rest.adress}<br>Время работы: ${rest.work_time} <br>телефон: ${rest.phone}`,
//             },
//             {
//               iconImageSize: [30, 42],
//               iconImageOffset: [-5, -38],
//             }
//           );
//           myMap.geoObjects.add(myPlacemark);
//         })
//     })
//   };



//   return (
//     <>
//       <div className={style.header}>
//         <div className={style.headerLeft}>
//           <h3 className={style.text}>Игровая площадка</h3>
//           <div className={style.extraText}>
//            Тут текст 
//           </div>
//         </div>
//         <div className={style.headerRight}>
//           <div className={style.buttons}>
//             <button onClick={() => navigate(-1)} className={style.buttonLeft} type="submit">
//               Список
//             </button>
//             <button className={style.buttonRight} type="submit">
//               Карта
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         {/* <div>
//           <button onClick={() => navigate(-1) } className={style.buttonRight} type="submit">Список участников</button>
//       </div>  */}
//         <div style={{width: '200px'}} className={style.map} id="map" />
//       </div>
//     </>
//   )
// }

// export default PlacesMap;



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { YMaps, Map, Placemark } from "react-yandex-maps";
// import { getPlacesFetch } from '../../redux/thunk/placesAsync.js';

// const mapData = {
//   center: [55.751574, 37.573856],
//   zoom: 5,
// };

// const coordinates = [
//   [55.684758, 37.738521],
//   [57.684758, 39.738521]
// ];

// const PlacesMap = () => {
//   const dispatch = useDispatch()
//   const {places} = useSelector(state => state.places)

//   useEffect(() => {
//     dispatch(getPlacesFetch())
//   }, [dispatch])

  
//   return (
//     <YMaps>
//       <Map defaultState={mapData}>
//         {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
//       </Map>
//     </YMaps>
//   )
// };
// export default PlacesMap;


// import React from "react";
// import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";
// import { points, gradientColors } from "./Data";

// const mapState = {
//   center: [55.751574, 80.573856],
//   zoom: 3,
//   behaviors: ["default", "scrollZoom"]
// };

// const getPointData = index => {
//   return {
//     balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
//     clusterCaption: "placemark <strong>" + index + "</strong>"
//   };
// };

// const getPointOptions = () => {
//   return {
//     preset: "islands#violetIcon",
//     iconColor: getRandomColor()
//   };
// };

// function getRandomColor() {
//   return gradientColors[Math.floor(Math.random() * gradientColors.length)];
// }



// class PlacesMap extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changeSomething = this.changeSomething.bind(this);
//     this.state = {
//       some: 0
//     };
//   }

//   changeSomething = () => {
//     this.setState({ some: 1 });
//   };

//   render() {
//     return (
//       <div>
//         <YMaps>
//           <Map
//             state={mapState}
//             width="750px"
//             height="600px"
//             modules={["package.full"]}
//           >
//             <Clusterer
//               options={{
//                 clusterIconLayout: "default#pieChart",
//                 clusterIconPieChartRadius: 25,
//                 clusterIconPieChartCoreRadius: 10,
//                 clusterIconPieChartStrokeWidth: 1,
//                 clusterDisableClickZoom: true,
//                 clusterHideIconOnBalloonOpen: false,
//                 geoObjectHideIconOnBalloonOpen: false
//               }}
//             >
//               {points.map((points, idx) => (
//                 <Placemark
//                   key={idx}
//                   geometry={points}
//                   properties={getPointData(idx)}
//                   options={getPointOptions()}
//                 />
//               ))}
//             </Clusterer>
//           </Map>
//         </YMaps>
//         <button
//           onClick={this.changeSomething}
//           style={{ marginTop: 40, width: 200, height: 60 }}
//         >
//           Click to rerender
//         </button>
//       </div>
//     );
//   }
// }

// export default PlacesMap;
