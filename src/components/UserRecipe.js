import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

const initialValues = {
  strReview: "",
  strUsername: "",
  rating: "",
};

function UserRecipe() {
  // const [review, username, ratings] = useState('');
  //   const [fetchedData, setfetchedData] = useState([]);
  //   const [values, setValues] = useState(initialValues);

  return (
    <div className="userRecipe">
      <header className="userRecipe-header">
        {/* <div id="todaysRecipe2">
          <h1> Today's Recipe:</h1>
        </div> */}
      </header>
      <div id="recipeBox">
        <h3>My Recipe: </h3>
        <form>
        <label>Culture: </label>
          <input type="text" name="strUsername" />
          <label>Ingredients: </label>
          <input type="text" name="strUsername" />
          <label>Instructions: </label>
          <input type="text" name="strReview" />
          <br />
          <label>Notes: </label>
          <input type="text" name="rating" />
          <br />
          <label>Picture: </label>
          <button id="uploadbtn">Upload Picture</button>
          <br/>
          <button id="submitbtn">Submit Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default UserRecipe;
