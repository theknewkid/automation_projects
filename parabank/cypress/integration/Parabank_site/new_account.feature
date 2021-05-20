Feature: Accounts

Scenario: Open a new account

Given user is on Accounts Overview page
When user clicks on the "Open New Account" link
And user selects the account type
And user selects an existing account to transfer funds into new account
And user clicks "Open New Account" button
Then the new account is opened
