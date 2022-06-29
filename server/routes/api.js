const express = require('express');
const router = express.Router();
// connect the controller .. require

const mealController = require('../controllers/mealController');

//get
router.get('/review',mealController.getReview, (req, res) => {
 return res.status(200).json(res.locals.getReview);
})

//post
router.post('/userRecipes', mealController.createRecipe, (req,res) =>{
    return res.status(200).json(res.locals.userRecipes);
});

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