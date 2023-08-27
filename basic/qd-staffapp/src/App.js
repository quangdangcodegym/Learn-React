import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStaffPage from './pages/AddStaffPage';
import StaffsPage from './pages/StaffsPage';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path='/staff' element={<StaffsPage />}></Route>
          <Route path='/staff/add' element={<AddStaffPage />}></Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
