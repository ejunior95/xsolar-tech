import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GerenteProvider }  from './context/GerenteContext'
import { ToastProvider } from './context/ToastContext';
ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <GerenteProvider>
        <App />
      </GerenteProvider>
    </ToastProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
