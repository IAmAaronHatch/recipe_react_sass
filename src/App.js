import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe'
import './App.css';

require('dotenv').config();

const App = () => {

  const APP_ID = process.env.REACT_APP_EDAMAM_API_ID;

  const APP_KEY = '9c72b9bb0f4a96af402080b935881d14';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')


  // commenting out because of limits to API call
  // UNCOMMENT TO START WORKING

  // useEffect(() => {
  //   getRecipes();
  // }, [query]);

  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  //   const data = await response.json();
  //   console.log("data", data)
  //   console.log("data.hits", data.hits)
  //   setRecipes(data.hits)
  // }


  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className='App'>
      <form 
      className='search-form'
      onSubmit={getSearch}
      >
        <input
          className='search-bar'
          type="text"
          value={search}
          onChange={updateSearch} />
        <button className='search-btn' type='submit'> Search </button>
      </form>

      {recipes.map(recipe => (
        <Recipe
          // Change key later, set it equal to something a little more unique than just the title
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
        />
      ))}
    </div>
  );
}

export default App;
