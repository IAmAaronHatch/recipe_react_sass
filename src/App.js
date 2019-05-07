import React, {useEffect, useState} from 'react';
import './App.css';

require('dotenv').config();

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;

  const APP_KEY = '9c72b9bb0f4a96af402080b935881d14';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button onClick={console.log("env", process.env.REACT_APP_EDAMAM_API_KEY)} className='search-btn' type='submit'> Search </button>
      </form>

    </div>
  );
}

export default App;
