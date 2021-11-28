Feature: Main Page

  I want to open the main page

  @smoke-tests
  Scenario: Opening the main page
    Given I open the main page
    Then I see "Sign in" button in the header