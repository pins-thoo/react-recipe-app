import React from 'react';

const Recipe = ({ name, calories, image, ingredients }) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{calories} cal</p>
      <img src={image} alt=""/>
      <ol>
        {ingredients.map(({ text }, index) => (
          <li key={index}>{text}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;