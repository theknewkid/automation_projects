Feature: Login

Scenario: Login with correct username and password

Given user navigates to the website parabank.com
And the user logs in with username as "john" and password as "demo"
And the user clicks the "Log In" button
Then login is successful
