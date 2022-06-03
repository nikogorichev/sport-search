import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import style from './Home.module.css';
import { Grid, Typography, Button, Box } from '@mui/material';


function Home() {


  const images = [
    { url: "https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1NDAyfHxlbnwwfHx8fA%3D%3D&w=1000&q=80" },
    { url: "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?cs=srgb&dl=pexels-pixabay-163444.jpg&fm=jpg" },
    { url: "https://admin.deltatre.com/images/F6zMonLEhgr_7MoDjbroXXq4NSE=/2056/width-2880/Slider_-_Volleyball_World_02.jpg" },
    { url: "https://i.pinimg.com/564x/1d/08/91/1d089137225f07d1414e4b028b8b76da.jpg" },
  ];

  return ( 
    <>
    < div className={style.home}>
      <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '0px' }}
        width={'100%'}
        height={'100%'}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
        slideDuration={ 2 }
    />
      </div >
    </>
)
}

export default Home;
