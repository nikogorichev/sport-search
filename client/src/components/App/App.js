import './App.css';
// Инструменты
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from '../Events/Events';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

// Компоненты
import Profile from '../Profile/Profile';
import { useEffect } from 'react';
import { checkAuthFetch } from '../../redux/thunk/asyncUser';

function App() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  console.log(user);

  useEffect(() => {
    dispatch(checkAuthFetch())
  }, [dispatch])

  return (

    <Provider store={globalStore}>
      <BrowserRouter>
        {/* <Nav /> */}
          <p>MAIN</p>
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" />
          <Route path="/events" element={<Events />}/>
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
     </Provider>
  );
}

export default App;
