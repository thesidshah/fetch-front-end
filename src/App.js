import React from 'react';
import LoginPage  from './pages/Login';
import PageNotFound from './components/PageNotFound';
import HomePage from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      
          <BrowserRouter>
            <Routes>
              <Route path='/LoginPage' element={<LoginPage/>}/>
              <Route path='/' element={<Navigate to='/LoginPage'/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
     
  </div>
  );
}

export default App;
