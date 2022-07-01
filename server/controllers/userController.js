const db = require('../models/sqlmodel');
const bcrypt = require('bcrypt');
const userController = {};

userController.verifyUser = (req, res, next) => {
    // write code here
    const password = bcrypt.hashSync(req.body.password, 10);

    // bcrypt.compare(password, data.rows.password)

    const qStr = `SELECT email, password, recipe_book_id
    FROM users
    WHERE EXISTS
    (SELECT email, password, recipe_book_id FROM users WHERE password = '${password}');`
    

    async function findUser (qStr) {
        try{
            const result = await db.query(qStr)
            res.locals.id = result.user_id
            return next();
        }
        catch (err) {
            console.log('incorrect username/password!')
            res.redirect('/signup')
        }
    }
    
    findUser(qStr);

    
    // models.User.findOne({username: userName, password: passWord}).then((data) => {
    //   if (data === null) {
    //     res.redirect('/signup');
    //   } else {
    //     models.User.findOne({username: req.body.username}).then((data) => {
    //       res.locals.objectId = data._id.id;
    //     });
  
    //     return next();
    //   }
    //   //add route to secret if login is correct
    // });
}


userController.createUser = (req, res, next) => {
    // write code here
    const password = bcrypt.hashSync(req.body.password, 10);
    const { email }  = req.body;
    //bcrypt password - reassign 
    

    const create = `INSERT INTO users (email, password)
    VALUES ('${email}', '${password}');`

    async function checkingUser(create){
        try{
            const result = await db.query(create);
            res.locals.id = result.user_id
            return next();
        }
        catch(err){
            console.log("User already exists");
            return (next(err))
        }
    }

    checkingUser(create);

  
    // User.create({username: userName, password: passWord});
  
    // models.User.findOne({username: req.body.username})
    //   .then((data) => {
    //     console.log(`#1 ${data._id.id}`);
    //     res.locals.objectId = data._id.id;
    //     console.log(`#2 ${res.locals.objectId}`);
    //   })
    //   .then((data) => {
    //     console.log(`#3 ${res.locals.objectId}`);
    //     if (body.hasOwnProperty('username') && body.hasOwnProperty('password')) {
    //       return next();
    //     } else res.redirect('/signup');
    //   });
  };

  module.exports = userController;
