import React, {useEffect, useState} from 'react';
import Recipe from './components/recipe'
import './App.css';

require('dotenv').config();

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;

  const APP_KEY = '9c72b9bb0f4a96af402080b935881d14';

  const [ recipes, setRecipes ] = useState([])


  // commenting out because of limits to API call
  // UNCOMMENT TO START WORKING

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   console.log("data", data)
  //   console.log("data.hits", data.hits)
  //   setRecipes(data.hits)
  // }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-btn' type='submit'> Search </button>
      </form>

      { recipes.map(recipe => (
        <Recipe 
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
