@smoke-tests @login-page
Feature: Login Page

  I want to open the login page

  Scenario: Open the login page
    Given I press "Sign in" button
    Then App shows "email" and "password" input fields

  Scenario: Sign in with valid credentials
    Given I sign in with valid email and password
    Then App makes request to authenticate api and redirects to "sales" page