@smoke-tests @customer-creation-page
Feature: Customer Creation Page

  I want to create the customer

  Scenario: Open the customer creation page
    Given I open the customer creation page
    Then App returns "customer card" page for the current user

  Scenario: Fill in the customer fields
    Given I fill in all customer fields
    Then App creates customer for the current user