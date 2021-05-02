import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { GerenteProvider }  from './context/GerenteContext'
import { ToastProvider } from './context/ToastContext';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle>
    <ToastProvider>
      <GerenteProvider>
        <App />
      </GerenteProvider>
    </ToastProvider>
    </GlobalStyle>
  </React.StrictMode>,
  document.getElementById('root')
);
