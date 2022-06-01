import './App.css';
// Инструменты
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from '../Places/Places';
import { useState } from 'react';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';


// Компоненты
import Profile from '../Profile/Profile';
import { useEffect } from 'react';
import { checkAuthFetch } from '../../redux/thunk/asyncUser';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Box, createTheme, Stack } from '@mui/material';

import Events from '../Events/Events';
import FilterEvent from '../FilterEvent/FilterEvent';
import MyEvents from '../MyEvents/MyEvents';
import EventsPlay from '../EventsPlay/EventsPlay';
import EventPage from '../EventPage/EventPage';
import PlacePage from '../PlacePage/PlacePage';
import Footer from '../Footer/Footer';


function App() {
  const dispatch = useDispatch()
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    dispatch(checkAuthFetch())
  }, [dispatch])

  return (

    <Provider store={globalStore}>
   
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/places" element={<Places />}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<FilterEvent />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/eventsplay" element={<EventsPlay />} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/place/:id" element={<PlacePage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
     </Provider>
  );
}

export default App;
