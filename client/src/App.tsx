import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import  { Home }  from './pages/Home';
import './App.css';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <Home />
    </div>
  );
};

export { App };
