@smoke-tests @authenticate-api
Feature: Authenticate API

  I want to make authenticate request

  Scenario: Authentication with valid credentials
    Given Request with valid email and password gets status-code 200 and valid json response