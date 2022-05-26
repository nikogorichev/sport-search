import './App.css';
// Инструменты
import { Provider } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from '../Events/Events';

// Компоненты

function App() {
  return (

    <Provider store={globalStore}>
      <BrowserRouter>
        {/* <Nav /> */}
          <p>MAIN</p>
        <Routes>
          <Route path="/" />
          <Route path="/events" element={<Events />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
