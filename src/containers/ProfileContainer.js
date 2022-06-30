import {React , useEffect} from 'react';
import UserRecipe from '../components/UserRecipe'
import RecipeCard from '../components/RecipeCard'


function Profile ({recipes, setRecipes}) {
    // use effect to update the recipes state with the recipes from the db
    // useEffect(() => {
    //     // need to make the fetchData function async to ensure we complete the get request before executing other code
    //     async function fetchData () {
    //         try{
    //             // send fetch with meal id in the req.query obj
    //             let data = await fetch('http://localhost:8080/userRecipeBook?'+ new URLSearchParams({}));
    //             const test = await data.json();
    //             console.log(test)
    //             return test;
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     // update reviews state to include the fetched reviews
    //     fetchData().then(data => setRecipes(data))
    // }, []);

    const renderRecipes = [];
    //for loop to go through review state and push a component onto an array to be used to render the posts from the state
    for (let i = 0; i < recipes.length; i++) {
        // console.log('marker')
        console.log(recipes[i])
        renderRecipes.push(<RecipeCard key={i} recipe={recipes[i]} />)
    }

    return(
        <div className='profile-container'>
            <span>
                <h3>Create a Recipe</h3>
                <UserRecipe recipes={recipes} setRecipes={setRecipes}/>
            </span>
            <span>
                <h3>Your Recipe Book</h3>
                {renderRecipes}
            </span>
        </div>
    )
}

export default Profile