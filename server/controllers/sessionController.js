const sessionController = {};


/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
    // write code here=
    //find cookie
        //check if cookie has name ssid
        //if yes next()
        //if no redirect to signup
  if(req.cookies.ssid) {
    return next()
  } else res.redirect('/signup')
  };
  
  /**
  * startSession - create and save a new Session into the database.
  */
//   sessionController.startSession = (req, res, next) => {
    //write code here
  
//   };


module.exports = sessionController;