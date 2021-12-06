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
      /frontend (features and steps for web pages)
    - All.features (suite for running all features tests)

  /plugins
    - index.js (contains cucumber plugin)

  /support
    /apis (contains models for rest api)
    /models (contains utility models)
    /pages (contains models for web pages)
    /roles (contains models for user roles)
    - commands.js (redefines cypress commands)
    - index.js (contains constants for page objects instances and utility functions) 
```