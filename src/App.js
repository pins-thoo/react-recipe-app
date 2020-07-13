import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = '2b91d5ef';
  const APP_KEY = 'd1e4a30785bf348fd0b70eccdee434d7';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}



export default App;
