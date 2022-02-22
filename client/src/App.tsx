import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login' 
import { Register } from './pages/Register'

export function App(): React.ReactElement {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
};

