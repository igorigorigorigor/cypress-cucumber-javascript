@smoke-tests @main-page
Feature: Main Page

  I want to open the main page

  Scenario: Open the main page
    Given I open the main page
    Then I see "Katana" in the title and "accept our cookie policy" pop-up