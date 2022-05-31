import SimpleImageSlider from "react-simple-image-slider";

function Home() {

  const images = [
    { url: "https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1NDAyfHxlbnwwfHx8fA%3D%3D&w=1000&q=80" },
    { url: "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?cs=srgb&dl=pexels-pixabay-163444.jpg&fm=jpg" },
    { url: "https://admin.deltatre.com/images/F6zMonLEhgr_7MoDjbroXXq4NSE=/2056/width-2880/Slider_-_Volleyball_World_02.jpg" },
    { url: "https://lede-admin.defector.com/wp-content/uploads/sites/28/2022/05/GettyImages-1397468129.jpg?crop=0px%2C38px%2C1024px%2C577px&resize=1200%2C675" },
  ];

  return ( 
    < div >
      <SimpleImageSlider
        style={{ margin: '0 auto', marginTop: '0px' }}
        width={'100%'}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
        slideDuration={ 2 }
    />
  </div >
)
}

export default Home;
