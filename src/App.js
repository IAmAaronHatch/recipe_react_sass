import React from 'react';
import logo from './logo.svg';
import './App.css';

require('dotenv').config();

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;

  const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY

  return (
    <div className='App'>
      <h1> Recipe App </h1>
    </div>
  );
}

export default App;
