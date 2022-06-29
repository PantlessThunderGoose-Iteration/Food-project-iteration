import React, { useState, useEffect } from 'react'
import Review from '../components/newReview'
// bring in the handleinput change
    //import the value state? or just send in a obj      
//make two divs one to hold the review input field the other to hold the post cards 
// Review Container State

// initial state is set from a get req to the reviews db.
// user writes review
    // post the review to the db
    // push new review obj to the state (to force a rerender of the review box)

//state = {
    //reviewList: [ {username:'', comment: '', rating: 0, }]
//}

// get meal.idMeal from Recipe
const ReviewContainer = () => {
    const [reviews, setReviews] = useState([]);

    // object for request body (we only want to get reviews for the specific recipe on the page)
    const getRecipeObj = {recipeId: meal.idMeal};

    // use effect will trigger when the component mounts.
    // it will grab the reviews from the database and update the reviews state
    useEffect(() => {
        fetch('http://localhost:8080/getReviews', { method: 'GET', 
          headers: {
          'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(getRecipeObj) 
        })
          .then((data) => data.json())
          .then((data) => {
            // console.log(data);
            setReviews(data);
          })
          .catch((error) => console.log(error));
    }, []);

    //declare an empty object for the review keys and inputfield values to be set as a key value pair
    let reviewInputObj = {};
    //Function is run when the input field is changed and adds a key value pair to the empty obj above 
    //which will later be passed to be rendered
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        reviewInputObj = ({...reviewInputObj, [name]: value });
    };
    //handle click function 
    const handleClickSumbmit = (e) => {
        //post the review to DB 
        fetch('http://localhost:8080/getReviews', { method: 'POST', 
          headers: {
          'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(reviewInputObj) 
        })
          .then((data) => data.json())
          .catch((error) => console.log(error));

        //update the reviews state
        setReviews([...reviews, reviewInputObj])
    };

    //declare an empty array
    const renderReviews = [];
    //for loop to go through review state and push a component onto an array to be used to render the posts from the state
    for (let i = 0; i < reviews.length; i++) {
        renderReviews.push(<Review data = {reviews[i]}/>)
    }
        
    

    return (
        <div id='reviewBox'>
            {/* Review Input fileds */}
            <div id='reviewInput'>
                <h3>Write Review: </h3>
                <form>
                    <label>Username: </label>
                    <input
                        type='text'
                        name='strUsername'
                        onChange={handleInputChange}
                    />
                    <label>Review: </label>
                    <input
                        type='text'
                        name='strReview'
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Rating: </label>
                    <input
                        type='text'
                        name='rating'
                        onChange={handleInputChange}
                    />
                    <br />
                    <span>Recipe ID: {meal.idMeal}</span>
                    <br />
                    <button id='submitbtn' onClick={handleClickSumbmit}>
                        Submit
                    </button>
                </form>
            </div>
            {/* Review Post Box */}
            <div id ="reviewList">
                {renderReviews}
            </div>
        </div>
    )
}