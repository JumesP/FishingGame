import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Landing from './pages/Landing';
import Main from './pages/Main';
import FishTank from './pages/FishTank';
import Rewards from "./pages/Rewards";
import Catch from "./pages/Catch";
import Login from "./pages/Login";

import sendCookieDataToBackend from './utils/sendCookieDataToBackend';

import './components/styles.scss';


function App() {
    sendCookieDataToBackend();

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/FishTank" element={<FishTank />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/Catch" element={<Catch />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;