import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import axios from 'axios';
import './index.css';

process.env.REACT_APP_MODE === 'production' ? 
                                    axios.defaults.baseURL = window.location.origin + '/api/v1' : // in production
                                    axios.defaults.baseURL = 'http://localhost:4000/api/v1/' // in development

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

