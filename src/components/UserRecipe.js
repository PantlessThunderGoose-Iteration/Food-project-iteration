import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


function UserRecipe({recipes, setRecipes}) {
 
  let userRecipe = {}
    // update userRecipe when user enters credentials
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        userRecipe = ({ ...userRecipe, [name]: value });
    };

    // when user signs up, post recipe to database
    const handleRecipeSumbmit = (e) => {
        fetch('http://localhost:8080/recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRecipe)
        })
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

        setRecipes([...recipes, userRecipe])
    };

  return (
    <div className="userRecipe">
      <div>
        <h3>My Recipe: </h3>
        <form>
          <label>Title: </label>
          <input type="text" name="title" onChange={handleInputChange}/>
          <label>Culture: </label>
          <input type="text" name="culture" onChange={handleInputChange}/>
          <label>Ingredients: </label>
          <input type="text" name="ingredients" onChange={handleInputChange}/>
          <label>Instructions: </label>
          <input type="text" name="instructions" onChange={handleInputChange}/>
          <br />
          <br />
          <button id="submitbtn" onClick={handleRecipeSumbmit}>Submit Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default UserRecipe;
