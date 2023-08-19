import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup tituloForm = "Registro" campo3 = "Email"/>
  </React.StrictMode>
);

reportWebVitals();
