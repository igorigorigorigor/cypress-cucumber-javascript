import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    getRandomEmail,
    authenticateAPI,
    loginPage,
    salesOrdersPage,
    trialUser
} from "../../../../support";

const {expect} = require("chai").use(require('chai-json-schema'));

Given('I sign in with invalid email', () => {
    authenticateAPI
        .intercept();
    loginPage
        .open();
    loginPage
        .getEmailInputField()
        .type(getRandomEmail());
    loginPage
        .getPasswordInputField()
        .type(trialUser.getPassword());
    loginPage
        .getSignInButton()
        .click();
});

Then(`App makes request to authentication api and shows error`, () => {
    authenticateAPI
        .getInterceptedRequestAndResponse().should((
        { request, response }) => {
        expect(response.statusCode).to.eq(403)
    });
    loginPage
        .getAuthError()
        .should('be.visible');
    salesOrdersPage
        .getSalesOrdersTab()
        .should('not.exist');
});