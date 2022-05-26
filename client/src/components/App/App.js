import './App.css';
// Инструменты
import { Provider } from 'react-redux'
import { store as globalStore } from '../../redux/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from '../Places/Places';
import { useState } from 'react';

// Компоненты

function App() {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" />
          <Route path="/place" element={<Places />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
