import React, { useState, useEffect } from 'react'
import Review from '../components/Review'
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
const ReviewContainer = (props) => {
    const [reviews, setReviews] = useState([]);
    const recipeId = props.meal.idMeal;

    // object for request body (we only want to get reviews for the specific recipe on the page)
    // const getRecipeObj = { recipeId: props.meal.idMeal };

    // use effect will trigger when the component mounts.
    // it will grab the reviews from the database and update the reviews state
    useEffect(() => {
        async function fetchData () {
            try{
                let data = await fetch('http://localhost:8080/getReviews?'+ new URLSearchParams({recipeId: props.meal.idMeal}));
                const test = await data.json();
                console.log(test)
                return test;
            }
            catch(err){
                console.log(err)
            }
        //     .then((data) => data.json())
        //     .then((data) => {
        //         console.log(data);
        //         setReviews(data);// reviews = [] => [{review1},{review2}]
        //         console.log(reviews)
        //     })
        //     .catch((error) => console.log(error));
        }

        fetchData().then(data => setReviews(data))
        
    }, []);

    //declare an empty object for the review keys and inputfield values to be set as a key value pair
    let reviewInputObj = {
        recipeId: recipeId,
    };
    //Function is run when the input field is changed and adds a key value pair to the empty obj above 
    //which will later be passed to be rendered
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        reviewInputObj = ({ ...reviewInputObj, [name]: value });
    };

    //handle click function 
    const handleClickSumbmit = (e) => {
        //post the review to DB 
        fetch('http://localhost:8080/postReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewInputObj)
        })
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

        //update the reviews state
        setReviews([...reviews, reviewInputObj])
    };

    //declare an empty array
    const renderReviews = [];
    //for loop to go through review state and push a component onto an array to be used to render the posts from the state
    for (let i = 0; i < reviews.length; i++) {
        console.log('marker')
        console.log(reviews[i])
        renderReviews.push(<Review key={i} data={reviews[i]} />)
    }

    return (
        <div id='reviewBox'>
            {/* Review Input fileds */}
            {/* change to span */}
            <span id='reviewInput'>
                <h3>Write Review: </h3>
                <div>
                    <label>Username: </label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleInputChange}
                    />
                    <label>Review: </label>
                    <input
                        type='text'
                        name='comments'
                        onChange={handleInputChange}
                    />
                    <br />
                    <label>Rating: </label>
                    <input
                        type='text'
                        name='stars'
                        onChange={handleInputChange}
                    />
                    <br />
                    <span>Recipe ID: {props.meal.idMeal}</span>
                    <br />
                    <button id='submitbtn' onClick={handleClickSumbmit}>
                        Submit
                    </button>
                </div>
            </span>
            {/* Review Post Box */}
            {/* change to span */}
            <span id="reviewList">
                <h3>Reviews:</h3>
                {renderReviews}
            </span>
        </div>
    )
}

export default ReviewContainer