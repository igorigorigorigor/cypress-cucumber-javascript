Feature: Katana Main Page

  I want to open a base page

  @smoke-tests
  Scenario: Opening a base page
    Given I open Katana page
    Then I see "Sign in" button in the header