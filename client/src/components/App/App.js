import './App.css';
// Инструменты
import { Provider } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Компоненты
import Profile from '../Profile/Profile';

function App() {

  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
     </Provider>
  );
}

export default App;
