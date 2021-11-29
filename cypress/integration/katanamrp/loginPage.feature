Feature: Login Page

  I want to open the login page

  @smoke-tests
  Scenario: Opening the login page
    Given I press "Sign in" button
    Then I see "email" and "password" input fields