const fetch = require('node-fetch');
const Meal = require('../models/recipeModel');
const db = require('../models/sqlmodel');

const mealController = {};

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

mealController.postReview = async (req, res, next) => {
  console.log('review received')
  const { strReview, strUsername, rating, recipeId } = req.body;

  try {
    const data = await Meal.UserReview.create({
      strReview,
      strUsername,
      rating,
      recipeId,
    });
    console.log(data);
    res.locals.userReview = data;
    next();
  } catch (err) {
    next({
      message: err,
    });
  }
};

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
