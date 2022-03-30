import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Nomor3Page from 'pages/Nomor3Page';
import Nomor4Page from 'pages/Nomor4Page';
import Nomor5Page from 'pages/Nomor5Page';
import ErrorPage from 'pages/ErrorPage';
import NavbarComponent from 'components/NavbarComponent';
import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nomor3" element={<Nomor3Page />} />
        <Route path="/nomor4" element={<Nomor4Page />} />
        <Route path="/nomor5" element={<Nomor5Page />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
