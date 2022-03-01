import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Config from './Config';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="DinMor" element={<Config />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
