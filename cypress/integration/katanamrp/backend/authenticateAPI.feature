@smoke-tests @authenticate-api
Feature: Authenticate API

  I want to make authenticate request

  Scenario: Authentication with valid credentials
    Given Request with valid email and password gets 200 OK and valid json response