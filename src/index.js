import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import MainPanel from './MainPanel';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="login" element={<Login />} />
      <Route path="panel" element={<MainPanel />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
