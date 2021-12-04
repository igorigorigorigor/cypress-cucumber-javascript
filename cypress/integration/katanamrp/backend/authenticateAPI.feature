@smoke-tests @authenticate-api
Feature: Authenticate API

  I want to make authenticate request

  Scenario: Authentication with valid credentials
    Given I make authenticate request with valid email and password
    Then App returns 200 OK and valid json response

  Scenario: Authentication with invalid email
    Given I make authenticate request with invalid email
    Then App makes request to authentication api and shows error

  Scenario: Authentication with valid email and invalid password
    Given I make authenticate request with valid email and invalid password
    Then App returns 403 Forbidden