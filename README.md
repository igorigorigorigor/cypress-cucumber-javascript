# cypress-cucumber-javascript
Project for testing https://katanamrp.com/ with Cypress 
using Cucumber on Javascript.

# Installation

```
npm install
```  

## Run tests for all features headlessly
```
npm test
```  

## Run tests for tags (or ignoring tags)
```
CYPRESS_TAGS="@customer-creation-page" npm test
```
```
CYPRESS_TAGS="not @main-page" npm test
```

## Generate HTML report with screenshots
```
npm run report
```

## Project structure
```
/cypress

  /integration
    /katanamrp
      /backend (features and steps for rest api)
        /authenticateAPI
          - authenticate_valid.js (steps for authenticate api)
        - authenticateAPI.feature (scenarios for authenticate api)
      /frontend (features and steps for web app)
        /customersPage (steps for /customers page)
        /loginPage (steps for /login page)
        /mainPage (steps for root page)
        /salesPage (steps for /sales page)
        - customersPage.feature (scenarios for /customers page)
        - loginPage.feature (scenarios for /login page)
        - mainPage.feature (scenarios for root page)
        - salesPage.feature (scenarios for /sales page)
    - All.features (suite for running all features tests)

  /plugins
    - index.js

  /support
    - commands.js
    - index.js
```