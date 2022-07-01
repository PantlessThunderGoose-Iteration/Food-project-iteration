import React from 'react';

function RecipeCard ({recipe}) {
    

    return(
        <div className='recipeCard'>
            <h2 id='recipeName'>{recipe.recipeName}</h2>
            <h2 id='culture'>{recipe.culture}</h2>
            <div className='RecipeContent'>
                <br />
                <div>
                    <div id='ingredients'>
                        <strong>Ingredients: </strong>
                        {recipe.ingredients}
                    </div>
                    <div id='instructions'>
                        <strong>Instructions: </strong>
                        <br />
                        {recipe.instructions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;