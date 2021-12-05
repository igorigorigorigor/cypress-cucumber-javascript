@smoke-tests @customer-creation-page
Feature: Customer Creation Page

  I want to create the customer

  @smoke-tests
  Scenario: Open the customer creation page
    Given I open the customer creation page
    Then App returns "customer card" page for the current user