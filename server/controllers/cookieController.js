const cookieController = {};
// const cookieParser = require('cookie-parser');

cookieController.setSSIDCookie = (req, res, next) => {
    // console.log(req.body.username);
  
    // models.User.findOne({username: req.body.username}).then((data) => {
    //   res.locals.objectId = data._id.id;
    // });
  
    // console.log(res.locals.objectId);
    res.cookie('ssid', 'hi')
    
    // { //ssid: res.locals.userId;
    //   maxAge: 300,
    //   httpOnly: true,
    // });
    console.log(res)
    console.log(res.cookie.ssid)
    return next();




  };

  module.exports = cookieController;