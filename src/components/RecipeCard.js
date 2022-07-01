import React from 'react';

function RecipeCard ({recipe}) {
    

    return(
        <div id='recipeCard'>
            <h2 id='recipeName'>{recipe.recipename}</h2>
            <div>

            <h3 id='culture'>{recipe.culture}</h3>
            </div>
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