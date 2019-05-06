import React, {useEffect, useState} from 'react';
import './App.css';

require('dotenv').config();

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;

  const APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log('effect running')
  }, []);

  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-btn' type='submit'> Search </button>
      </form>

      <h1 onClick={() => setCounter(counter + 1)} > { counter } </h1>
    </div>
  );
}

export default App;
