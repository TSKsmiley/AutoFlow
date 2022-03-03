import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './ContextProvider';

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
        <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
