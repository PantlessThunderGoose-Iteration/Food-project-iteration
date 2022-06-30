import React from 'react';
import ReviewContainer from './ReviewContainer';

//function recipe passing in the meal state
function Recipe({ meal, recipes, setRecipes }) {
    //declare and empty array and push all the ingredients and measuremnets that dont return null from the meal state
    const newArr = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`])
            newArr.push(meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]);
    }

    const saveRecipeObj = {
        culture: meal.strArea,
        recipeName: meal.strMeal,
        ingredients: newArr,
        instructions: meal.strInstructions
    }

    // function for user to save recipe
    const handleClickSumbmit = (e) => {
        fetch('http://localhost:8080/userRecipeBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(saveRecipeObj)
        })
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
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
                            alt='No Recipe Selected'
                        />
                        <div id='instructions'>
                            <strong>Instructions: </strong>
                            <br />
                            {meal.strInstructions}
                        </div>
                        <button id='save-recipe' onClick={handleClickSumbmit}>
                        Save Recipe to Recipe Book
                    </button>
                    </div>

                    <div id='reviewContainer'>
                        <ReviewContainer meal={meal} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
