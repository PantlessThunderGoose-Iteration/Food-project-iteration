const fetch = require('node-fetch');
const Meal = require('../models/recipeModel');
const db = require('../models/sqlmodel');

const mealController = {};



mealController.getReviews = (req, res, next) => {
  console.log(req.body)
  const {recipeId} = req.body;

  const qStr = `SELECT stars, email, comments FROM reviews WHERE recipe_id=${recipeId};`;

db.query(qStr)
  .then((data) => {
    res.locals.reviews = data.rows
    next();
  })
  .catch ((err) => {
    next({
      log: 'Error in getReviews middleware',
      status: 400,
      message: `Error: ${err}`,
    })
  })

}

mealController.postReview = (req, res, next) => {
  const {strUsername, rating, strReview, recipeId} = req.body;

  const qStr = `INSERT INTO reviews (stars, comments, username, recipe_id)
  VALUES (${rating}, '${strReview}', '${strUsername}', ${recipeId});`


console.log(strUsername);

  db.query(qStr)
    .then((data) => {
      next()
    })
    .catch ((err) => {
      next({
        log: 'Error in postReview middleware',
        status: 400,
        message: `Error: ${err}`,
      })
    })
    
}




mealController.postRecipe = (req, res, next) =>{
  //req.body
  console.log('Check1')

  const arrIngredients = [];
  const arrMeasure = [];
  const {strMeal, strArea, strInstructions} = req.body.meals[0];

  
  for (let i = 1; i <= 20; i++) {
      arrIngredients.push(req.body.meals[0][`strIngredient${i}`])
  }
  
  let qStr = `INSERT INTO recipes
  (name, country, instructions, stringredient1, stringredient2, stringredient3, stringredient4, stringredient5, stringredient6, stringredient7, stringredient8, stringredient9, stringredient10, stringredient11, stringredient12, stringredient13, stringredient14, stringredient15, stringredient16, stringredient17, stringredient18, stringredient19, stringredient20)
    VALUES ('${strMeal}', '${strArea}', '${strInstructions}', $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);`

    

  for (let i = 1; i <= 20; i++) {
      arrMeasure.push(req.body.meals[0][`strMeasure${i}`])
  }
    
  let qStr2 = `UPDATE recipes 
   SET strmeasure1 = $1, strmeasure2 = $2, strmeasure3 = $3, strmeasure4 = $4, strmeasure5 = $5, strmeasure6 = $6, strmeasure7 = $7, strmeasure8 = $8, strmeasure9 = $9, strmeasure10 = $10, strmeasure11 = $11, strmeasure12 = $12, strmeasure13 = $13, strmeasure14 = $14, strmeasure15 = $15, strmeasure16 = $16, strmeasure17 = $17, strmeasure18 = $18, strmeasure19 = $19, strmeasure20 = $20
   WHERE name = '${strMeal}';`

   console.log(req.body.meals[0])

    db.query(qStr, arrIngredients)
    .then((data) => {
      console.log('Check3')
      db.query(qStr2, arrMeasure)
        .then((data) => {
          console.log('Check4')
          next();
        })
    })


    .catch ((err) => {
      next({
        log: 'Error in postRecipe middleware',
        status: 400,
        message: `Error: ${err}`,
      })
    })
  





    


  // try{
  //   db.query(qStr)
  //   await next();
  // }
  // catch(err) {
  //   return next({
  //     log: 'Error in postRecipe middleware',
  //     status: 400,
  //     message: `Please verify data inputs. Error: ${err}`,
  //   })
  // }


}


const obj = {
  "meals":[
      {
        "idMeal":"53015",
        "strMeal":"Krispy Kreme Donut",
        "strDrinkAlternate":null,
        "strCategory":"Dessert",
        "strArea":"American",
       "strInstructions":"Dissolve yeast in warm water in 2 1\/2-quart bowl. Add milk, sugar, salt, eggs, shortening and 2 cups flour. Beat on low for 30 seconds, scraping bowl constantly. Beat on medium speed for 2 minutes, scraping bowl occasionally. Stir in remaining flour until smooth. Cover and let rise until double, 50-60 minutes. (Dough is ready when indentation remains when touched.) Turn dough onto floured surface; roll around lightly to coat with flour. Gently roll dough 1\/2-inch thick with floured rolling pin. Cut with floured doughnut cutter. Cover and let rise until double, 30-40 minutes.\r\nHeat vegetable oil in deep fryer to 350\u00b0. Slide doughnuts into hot oil with wide spatula. Turn doughnuts as they rise to the surface. Fry until golden brown, about 1 minute on each side. Remove carefully from oil (do not prick surface); drain. Dip the doughnuts into creamy glaze set on rack.\r\n\r\n\r\nGlaze: \r\nHeat butter until melted. Remove from heat. Stir in powdered sugar and vanilla until smooth. Stir in water, 1 tablespoon at a time, until desired consistency.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/4i5cnx1587672171.jpg",
        "strTags":null,
        "strYoutube":"https:\/\/www.youtube.com\/watch?v=SamYg6IUGOI",
        "strIngredient1":"Yeast",
        "strIngredient2":"Water",
        "strIngredient3":"Water",
        "strIngredient4":"Sugar",
        "strIngredient5":"Salt",
        "strIngredient6":"Eggs",
        "strIngredient7":"Shortening",
        "strIngredient8":"Flour",
        "strIngredient9":"Canola Oil",
        "strIngredient10":"Milk",
        "strIngredient11":"Sugar",
        "strIngredient12":"Vanilla",
        "strIngredient13":"Boiling Water",
        "strIngredient14":"Butter",
        "strIngredient15":"",
        "strIngredient16":"",
        "strIngredient17":"",
        "strIngredient18":"",
        "strIngredient19":"",
        "strIngredient20":"",  
     
        "strMeasure1":"1\/4 ounce",
        "strMeasure2":"1\/4 cup",
        "strMeasure3":"1 1\/2 cups ",
        "strMeasure4":"1\/2 cup ",
        "strMeasure5":"1 tsp ",
        "strMeasure6":"2",
        "strMeasure7":"1\/3 cup",
        "strMeasure8":"5 drops",
        "strMeasure9":"Sprinking",
        "strMeasure10":"1\/2 cup",
        "strMeasure11":"2 cups ",
        "strMeasure12":"1 1\/2 cups ",
        "strMeasure13":"6 tablespoons",
        "strMeasure14":" 1\/3 cup",
        "strMeasure15":" ",
        "strMeasure16":" ",
        "strMeasure17":" ",
        "strMeasure18":" ",
        "strMeasure19":" ",
        "strMeasure20":" ",
        "strSource":"https:\/\/www.mythirtyspot.com\/krispy-kreme-copycat-recipe-for\/",
        "strImageSource":null,
        "strCreativeCommonsConfirmed":null,
        "dateModified":null
      }]
    }








// db.query(queryStr)
//         .then(() => {
//             res.locals.newEvent = data;
//             return next();
//         }).catch(err => {
//             return next({
//                 log: 'Error in create event middleware',
//                 status: 400,
//                 message: 'Please verify data input are correct type.',
//             });
//         })



// CREATE TABLE recipes(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR,
//   country_code INT,
//   ingredients VARCHAR,
//   instructions VARCHAR,
//   reviews_table_id VARCHAR
//   )






mealController.createRecipe = async (req, res, next) => {

  //query command

  const { strCategory, strArea, strInstructions, strTags } = req.body;

  
  try {
    const data = await Meal.UserRecipe.create({
      strCategory,
      strArea,
      strInstructions,
      strTags,
    });
    console.log(data);
    res.locals.userRecipes = data;
    next();
  } catch (err) {
    next({
      message: err,
    });
  }
};

//post review set up
// mealController.postReview = async (req, res, next) => {
//   console.log('review received')
//   const { strReview, strUsername, rating, recipeId } = req.body;

//   try {
//     const data = await Meal.UserReview.create({
//       strReview,
//       strUsername,
//       rating,
//       recipeId,
//     });
//     console.log(data);
//     res.locals.userReview = data;
//     next();
//   } catch (err) {
//     next({
//       message: err,
//     });
//   }
// };

mealController.getReview = async(req,res,next) =>{
  try{
    const data = await Meal.UserReview.find({});
    res.locals.getReview = data;
    next();
  }catch(err){
    next({
      message:err,
    });
  }

};

mealController.updateReview = async (req, res, next) => {
  const { id } = req.params;
  const { strReview, strUsername, rating,} = req.body;

  try {
    const data = await Meal.UserReview.findByIdAndUpdate(
      id,
      { strReview: strReview, strUsername: strUsername, rating: rating }
    );
    res.locals.updatedReview = data;
    next();
  } catch (err) {
    next({
      message: err,
    });
  }
};

mealController.deleteReview = async (req, res, next) => {
  const findId = req.params['id'];
  try{
    const deleted = await Meal.UserReview.findByIdAndDelete(findId, {})
    res.locals.deletedReview = deleted;
    return next();
  }
  catch (err) {
     return next({
      message: err,
    });
   }
  }

module.exports = mealController;
