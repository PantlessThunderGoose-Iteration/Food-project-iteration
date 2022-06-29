const express = require('express');
const router = express.Router();
// connect the controller .. require

const mealController = require('../controllers/mealController');

//get reviews
router.get ('/getReviews', mealController.getReviews, (req, res) => {
    return res.status(200).json(res.locals.reviews)
})


//post request for the database
router.post('/postRecipe', mealController.postRecipe, (req, res)=>{
    return res.status(200).json("recipe is saved in the database");
})




router.get('/review',mealController.getReview, (req, res) => {
 return res.status(200).json(res.locals.getReview);
})

router.post('/userRecipes', mealController.createRecipe, (req,res) =>{
    return res.status(200).json(res.locals.userRecipes);
});

//set up
router.post('/review', mealController.postReview, (req, res) =>{
  return res.status(200).json(res.locals.userReview);
});

//update //update recipe instead?
router.patch('/review/:id', mealController.updateReview,  (req,res) => {
    return res.status(200).json(res.locals.updatedReview)
})

//delete

router.delete('/review/:id', mealController.deleteReview, (req, res) => {
    return res.status(200).send(`Deletion successful: ${res.locals.deletedReview}`)
})


module.exports = router;