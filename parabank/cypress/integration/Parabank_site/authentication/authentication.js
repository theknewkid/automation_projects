import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://parabank.parasoft.com';
const username = 'john';
const password = 'demo';
const incorrectUsername = 'test';
const incorrectPassword = 'wrongPass';

Given('user navigates to the website parabank.com', () => {
  cy.visit(url)
});

And('the user logs in with username as "john" and password as "demo"', () => {
  cy.get('input[name=username]').type(username);
  cy.get('input[name=password]').type(password);
});

And('the user clicks the "Log In" button', () => {
  cy.get('.login > .button').click();
});

Then('login is successful', () => {
  cy.get('.title').contains('Accounts Overview');
});
