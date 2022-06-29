import React from 'React';
import { render, screen, waitFor } from '@testing-library/react';
import Recipe from '../containers/Recipe'
import Main from '../components/Main'
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'


//describe wrapper around the entire
// Test 1) Recipe - check that title, ingredients and instructions render
//describe for test 1 
// test
//expectation
xdescribe('Recipe', () => {
    test('loads and displays recipe', async () => {
        const history = createMemoryHistory()
        history.push('/recipe')
        render(<Router location={history.location} navigator={history}>
            <Recipe />
        </Router>
        );
        expect(screen.getByText('Ingredients')).toBeInTheDocument();
        expect(screen.getByText('Instructions')).toBeInTheDocument();
    })
})

// Test 2) Test Main component and review component are rendering
//describe for test 1 
//test 
//expectation
xdescribe('Main', () => {
    test('loads and displays main component', () => {
        render(<Main />);
    })
})

// Tests for Interation Additions
//describe for test 1 
//it (test) 
//expectation
// Test 1) Login Page renders
xdescribe('Login', () => {
    test('loads and displays login page', () => {
        render(<Login />);
    })
})

// Test 2) Profile route renders
xdescribe('Profile', () => {
    test('loads and displays profile', () => {
        render(<Profile />);
        expect(screen.getByText('Saved Recipes')).toBeInTheDocument();
        expect(screen.getByText('Reviews')).toBeInTheDocument();
    })
})