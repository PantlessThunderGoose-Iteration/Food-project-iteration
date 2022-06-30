const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');


// signin
router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
      // what should happen here on successful log in?
      console.log('check5')
      res.redirect('/profile');
    }
  );


//signup

  
router.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
      // what should happen here on successful sign up?
      res.redirect('/profile');
});

  module.exports = router;