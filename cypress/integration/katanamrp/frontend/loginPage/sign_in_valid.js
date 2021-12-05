import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    authenticateAPI,
    authenticateAPIRequestJsonSchema,
    loginPage,
    salesOrdersPage,
    trialUser
} from "../../../../support";

const {expect} = require("chai").use(require('chai-json-schema'));

Given('I sign in with valid email and password', () => {
    authenticateAPI
        .intercept();
    loginPage
        .open();
    loginPage
        .getEmailInputField()
        .type(trialUser.getEmail());
    loginPage
        .getPasswordInputField()
        .type(trialUser.getPassword());
    loginPage
        .getSignInButton()
        .click();
});

Then(`App makes request to authentication api and redirects to "sales" page`, () => {
    authenticateAPI
        .getInterceptedRequestAndResponse().should((
        { request, response }) => {
        expect(request.body).to.be.jsonSchema(authenticateAPIRequestJsonSchema);
        expect(request.body).to.deep.include( {
            username: trialUser.getEmail(),
            password: trialUser.getPassword()
        });
        expect(response.statusCode).to.eq(200)
    });
    salesOrdersPage
        .getSalesOrdersTab()
        .should('be.visible');
});