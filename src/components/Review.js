import React, { useState, useEffect } from 'react';

const initialValues = {
    strReview: '',
    strUsername: '',
    rating: '',
  };
  

const Review = (props) => {
    // return <Review id={review._id} strReview={review.strReview} username={review.strUsername} rating={review.rating} />
    const [fetchedReviews, setfetchedReviews] = useState([]);
    const [values, setValues] = useState(initialValues);

    const handleClick = (e) => {
        e.preventDefault();
    
        //console.log("Submit: ",  values);
    
        let databody = {
          strUsername: values.strUsername,
          strReview: values.strReview,
          rating: values.rating,
          recipeId: props.idMeal
        };
        console.log("submitting data-body",databody)
        // _id:62ba32be55fdc60cfde8e4e7
        fetch(`http://localhost:8080/api/review/${fetchedReviews._id}`, {
          method: 'PATCH',
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
      }; //end of handleCLick
const { id, strReview, username, rating, mealId } = props;
  return (
  
 
    <div>
      
      <div>User: {username}</div>
      <div>RecipeID: {mealId}</div>
      <div>Review: {strReview}</div>
      <div>Rating: {rating}</div>
    <button id='submitbtn' onClick={handleClick} >Update Review</button>
    </div>
   
  );
};

export default Review;
