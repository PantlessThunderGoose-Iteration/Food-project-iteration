//import the subject
//import subject from '../handlers';
//import { getByTestId, render } from "react-testing-library";
import App from '../containers/App'
import Recipe from '../containers/Recipe'
import Main from '../components/Main'

import { getByTestId, render, screen } from '@testing-library/react';


// Tests for Initial App
//start with describe wrapper for all handlers
describe('Handlers', () => {
    //declare the state; 
    let mealState;
    let countryState
    //before each statment passing in a function
    beforeEach(() => {
        //we set state equal to intialstate
        mealState = {
            meal: ""
        };
        countryState = {
            country: ""
        }
    });

    // Test 1) State - check initial 
    describe('default state', () => {
        it('Should return default mealState when undefined is passed in as an input', () => {
            const { container } = render(<Recipe />);
            const meal = screen.getByTestId(container, "meal");
            expect(meal).toBe(mealState)
        });
        it('Should return default countryState when undefined is passed in as an input', () => {
            const { container } = render(<Main />);
            const country = screen.getByTestId(container, "country");
            expect(country).toBe(countryState)
        })
    })


    // Test 2) State inside of recipe, expect to change and render review when review is added


})




