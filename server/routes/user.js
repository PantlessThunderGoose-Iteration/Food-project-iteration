const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');
// const cookieParser = require('cookie-parser');


// signin
router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
      // what should happen here on successful log in?
      console.log('check5')
      return res.status(200).json("Login Successful!")
    }
  );


//signup

  
router.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
      // what should happen here on successful sign up?
      console.log('check5')
      return res.status(200).json("Signed up Successfully!")
});

  module.exports = router;