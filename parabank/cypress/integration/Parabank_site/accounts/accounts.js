import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";

const url = 'https://parabank.parasoft.com';
const username = 'john';
const password = 'demo';
const incorrectUsername = 'test';
const incorrectPassword = 'wrongPass';

Before(() => {
  //Log in to parabank site

  cy.visit(url)
  cy.get('input[name=username]').type(username);
  cy.get('input[name=password]').type(password);
  cy.get('.login > .button').click();
  cy.get('.title').contains('Accounts Overview');
});

// Open new account

Given('user is on Accounts Overview page', () => {
  cy.get('a[href*="/parabank/overview.htm"]').click();
});

When('user clicks on the "Open New Account" link', () => {
  cy.get('a[href*="/openaccount.htm"]').click();
});

And('user selects the account type', () => {
  cy.get('#type').select('CHECKING');
});

And('user selects an existing account to transfer funds into new account', () => {
  cy.get('#fromAccountId').select('13899');
});

And('user clicks "Open New Account" button', () => {
  cy.get('.button').contains('Open New Account').click();
});

Then('the new account is opened', () => {
  cy.get('h1').should('contain','Account Opened!');
});


// View account details

Given('user is on Accounts Overview page', () => {
  cy.get('a[href*="/parabank/overview.htm"]').click();
});

When('user clicks on an Account', () => {
  cy.get('#accountTable').contains('13899').click();
});

Then('Account Details is displayed', () => {
  cy.get('h1').should('contain','Account Details');
});

After(() => {
  //Log out of parabank site

  cy.get('a[href*="/parabank/logout.htm"]').click();
  cy.get('h2').should('contain', 'Customer Login');
});
