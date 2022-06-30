const request = require('supertest');
const server = 'http://localhost:8080';


describe('post requests to server', () => {
    describe('/recipes', () => {
      describe('POST', () => {
        // Note that we return the evaluation of `request` here! It evaluates to
        // a promise, so Jest knows not to say this test passes until that
        // promise resolves. See https://jestjs.io/docs/en/asynchronous
        it('responds with 200 status, application/json, and the inserted object', () => {

            const obj = {
                name: 'Ginger Congee',
                country_code: 4,
                ingredients: 'rice, water, ginger',
                instructions: '1) add 3 parts water. 2)add 1 part rice 3) simmer for 40 minutes 4) add diced ginger, 5) Serve and enjoy!',
                reviews_table_id: 3
            };


          return request(server)
            .post('/recipes')
            .send({name: 'Ginger Congee',
                   country_code: 4,
                   ingredients: 'rice, water, ginger',
                   instructions: '1) add 3 parts water. 2)add 1 part rice 3) simmer for 40 minutes 4) add diced ginger, 5) Serve and enjoy!',
                   reviews_table_id: 3})
            .expect(({body})=> 
                expect(body).toEqual(obj))
            .expect('Content-Type', /application\/json/)
            .expect(200);
        });

        it('responds to invalid request with 400 status and error message in body', () => {
            return request(server)
            .post('/recipes')
            .send({ name: 'Peking Duck', 
                     fakedata: 123})
            .expect(400)
            .then(({ body }) => {
              expect(body).toHaveProperty('error')
            });
          });
      });


      describe('GET', () => {
        it('responds with 200 status, application/json', () => {
            return request(server)
            .get('/recipes')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            });
          });

      describe('GET', () => {
        it('with correct object of recipe', () => {
            return request(server)
            .get('/recipes')
            .then(({ body }) => {
              expect(body).toHaveProperty('name')
              expect(body).toHaveProperty('country_code')
              expect(body).toHaveProperty('ingredients')
              expect(body).toHaveProperty('instructions')
              expect(body).toHaveProperty('reviews_table_id')
            })
            });
        });
      });
    });

//get request reviews and saved recipes.