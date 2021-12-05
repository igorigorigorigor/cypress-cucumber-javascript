@smoke-tests @sales-page
Feature: Sales Page

  I want to open the sales page

  Scenario: Open the sales page
    Given I open the sales page
    Then App returns "sales" page with "orders" tab for the current user

  Scenario: Open customer creation page
    Given I press "+" button and select "Customer" option
    Then App returns "customer card" page for the current user