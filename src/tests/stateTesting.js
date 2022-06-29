//import the subject
import subject from '../handlers';
import { getByTestId} from "react-testing-library";

// Tests for Initial App
//start with describe wrapper for all handlers
describe('Handlers', () => {
    //declare the state; 
    let state; 
    //before each statment passing in a function
    beforeEach(() => {
        //we set state equal to intialstate
        mealState = {
            meal:""
        };
        countryState = {
            country:""
        }
    });    
    
    // Test 1) State - check initial 
    describe('default state', () => {
        it ('Should return default mealState when undefined is passed in as an input', ()=>{
            const { container } = render(<App />);
            const meal = getByTestId(container, "meal");
            expect(meal).toBe(mealState)
        });
        it ('Should return default countryState when undefined is passed in as an input', ()=>{
            const { container } = render(<App />);
            const country = getByTestId(container, "country");
            expect(country).toBe(countryState)
        })
    })
    
    
    // Test 2) State inside of recipe, expect to change and render review when review is added
    

})




