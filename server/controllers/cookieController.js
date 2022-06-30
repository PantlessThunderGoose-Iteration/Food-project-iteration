const cookieController = {};
const cookieParser = require('cookie-parser');

cookieController.setSSIDCookie = (req, res, next) => {
    // console.log(req.body.username);
  
    // models.User.findOne({username: req.body.username}).then((data) => {
    //   res.locals.objectId = data._id.id;
    // });
  
    // console.log(res.locals.objectId);
  
    res.cookie('ssid', res.locals.userId, { //ssid: res.locals.userId;
      maxAge: 300,
      httpOnly: true,
    });
  
    return next();
  };

  module.exports = cookieController;