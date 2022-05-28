import './App.css';
// Инструменты
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from '../Places/Places';
import { useState } from 'react';
import Events from '../Events/Events';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';


// Компоненты
import Profile from '../Profile/Profile';
import { useEffect } from 'react';
import { checkAuthFetch } from '../../redux/thunk/asyncUser';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { Box, createTheme, Stack } from '@mui/material';

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
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/places" element={<Places />}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      </Box>
     </Provider>
  );
}

export default App;
