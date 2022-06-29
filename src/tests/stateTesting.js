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
        state = {
            meal:"",
            country:""
        };
    });    
    
    // Test 1) State - check initial 
    describe('default state', () => {
        it ('Should return default state when undefined is passed in as an input', ()=>{
            expect(subject())
        })
    })
        //describe for test 1 
            //it (test) 
            //expectation
    
    
    // Test 2) State inside of recipe, expect to change and render review when review is added
    

})




