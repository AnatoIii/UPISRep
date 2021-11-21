import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import Login from './screens/Login';
import MainPage from './screens/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
