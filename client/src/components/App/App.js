import './App.css';
// Инструменты
import { Provider } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

// Компоненты

function App() {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
