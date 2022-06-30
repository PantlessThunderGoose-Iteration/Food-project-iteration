const db = require("../models/sqlmodel.js");


// Checking if deleting successfully
describe('db unit tests', ()=>{


    beforeEach((done)=>{
        db.query(`CREATE TABLE test (
            user_id SERIAL PRIMARY KEY,
            email VARCHAR ( 50 ) UNIQUE NOT NULL,
            password VARCHAR ( 50 ) NOT NULL,
            recipe_book_id INT;`)
        done();
         });

    afterEach((done)=>{
        db.query(`DROP TABLE test;`);
        done();
    });

    it('tesing if the data is added successfully to the database',()=>{
        
        const obj = {
            user_id: 1,
            email: "testing@gmail.com",
            password: "123abc",
            recipe_book_id: 1,
        }

        db.query(`INSERT INTO test (email, password, recipe_book_id)
        VALUE('testing@gmail.com', '123abc', 1)`)

        const select = 'SELECT * FROM test'

        db.query(select)
          .then((data)=>{
            let testing = data.rows;
          })

        expect(testing.toEqual(obj));
    })
})

    //`INSERT INTO events (title, date, start_time, end_time, activity_type, num_participants, participants, location)
    // VALUES ('whatever@gmail.com', '${data.date}', '${data.start_time}', '${data.end_time}', '${data.activity_type}', ${data.num_participants},  ARRAY['${data.participants} '], '${data.location}')`

    
//     const queryStr = 'SELECT * FROM events';

//   db.query(queryStr)
//     .then((data) => {
//       res.locals.events = data.rows;
//       return next();
//     })
        
     //describe bracket


   

