@smoke-tests @login-page
Feature: Login Page

  I want to open the login page

  Scenario: Open the login page
    Given I press "Sign in" button
    Then I see "email" and "password" input fields

  Scenario: Sign in with valid credentials
    Given I sign in with valid email and password
    Then I see "sales" page