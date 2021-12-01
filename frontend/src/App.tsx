import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import Login from './screens/Login';
import MainPage from './screens/MainPage';
import Register from './screens/Register';
import authService from './logic/services/AuthService';
import Modal from 'react-modal';
import PresenationPage from './screens/Presentation';

function App() {
  const isUserAuthentificated = authService.isAuthentificated();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="main" element={isUserAuthentificated ? <MainPage /> : <Login /> } />
        <Route path="presentation/:id" element={<PresenationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

Modal.setAppElement('#modalElement');

export default App;
