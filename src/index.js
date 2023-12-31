import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import AppRouter from './Router/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   
 <AppRouter/>

  </BrowserRouter>
);


