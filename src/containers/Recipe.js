import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Review from '../components/Review';

const initialValues = {
  strReview: '',
  strUsername: '',
  rating: '',
}; 

function Recipe({ meal }) {
  //const [meal, setMeal] = useState('')
  const newArr = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`])
      newArr.push(meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]);
  }

  //console.log(newArr)
  // console.log(meal.strIngredient1)
  //const [review, username, ratings] = useState('');
  const [fetchedReviews, setfetchedReviews] = useState([]);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    fetch('http://localhost:8080/api/review', { method: 'GET' })
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setfetchedReviews(data);
      })
      .catch((error) => console.log(error));
  },[]); //end of useEffect

  const renderReviews = () => {
    const filteredReviews = fetchedReviews.filter(review => {return review.recipeId === parseInt(meal.idMeal)});
    console.log(filteredReviews);
    return filteredReviews.map(review => {
        return (
          <Review
            id={review._id}
            strReview={review.strReview}
            username={review.strUsername}
            rating={review.rating}
            mealId={review.recipeId}
          />
        );
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    //console.log("Submit: ",  values);

    let databody = {
      strUsername: values.strUsername,
      strReview: values.strReview,
      rating: values.rating,
      recipeId: meal.idMeal,
    };
    console.log('submitting data-body', databody);

    fetch('http://localhost:8080/api/review', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        if (response.ok) {
          console.log('Data has been sent to MongoDB');
        } else {
          throw new Error('CLICK FAILED');
        }
      })
      .catch((error) => console.log(error));
      setValues(initialValues);
  }; //end of handleCLick

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

          <div id='reviewBox'>
            <h3>Write Review: </h3>
            <form>
              <label>Username: </label>
              <input
                type='text'
                name='strUsername'
                value={values.strUsername}
                onChange={handleInputChange}
              />
              <label>Review: </label>
              <input
                type='text'
                name='strReview'
                value={values.strReview}
                onChange={handleInputChange}
              />
              <br />
              <label>Rating: </label>
              <input
                type='text'
                name='rating'
                value={values.rating}
                onChange={handleInputChange}
              />
              <br />
              <span>Recipe ID: {meal.idMeal}</span>
              <br />
              <button id='submitbtn' onClick={handleClick}>
                Submit
              </button>
            </form>

            {/* <Link to='/review'><button id='btn2' onClick={() => handleClick(review)}>Submit</button></Link>
          <Routes>
        <Route path="/review" />
        </Routes> */}
            {/* </form> */}
          </div>
        </div>
        
        <div id='reviews'>
          <h3>Reviews: </h3>
          {renderReviews()}</div>
      </div>
    </div>
  );
}

export default Recipe;
