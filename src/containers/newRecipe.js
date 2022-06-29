import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Review from '../components/Review';
import ReviewContainer from './NewReviewContainer';

//function recipe passing in the meal state
function Recipe({ meal }) {
    //declare and empty array and push all the ingredients and measuremnets that dont return null from the meal state
  const newArr = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`])
      newArr.push(meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]);
  }

  return (
    <div className='Recipe'>
      <header className='Recipe-header'>
        <div id='culture'>
          <strong>Culture: {meal.strArea}</strong>
        </div>
        <br />
      </header>
      <div id='everything'>
        <h1 id='todaysRecipe'> Today's Recipe:</h1>
        <h2 id='recipeName'>{meal.strMeal}</h2>
        <div className='RecipeContent'>
          <br />
          <div>
            <div id='ingredients'>
              <strong>Ingredients: </strong>
              {newArr.map((el) => {
                return <li>{el}</li>;
              })}
            </div>
            <img
              className='recipePic'
              src={meal.strMealThumb}
              alt='recipePic'
            />
            <div id='instructions'>
              <strong>Instructions: </strong>
              <br />
              {meal.strInstructions}
            </div>
          </div>

          <div id='reviewContainer'>
            <ReviewContainer meal={meal}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
