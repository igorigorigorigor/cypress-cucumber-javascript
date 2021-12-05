import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    authenticateAPI, getRandomString,
    loginPage,
    salesOrdersPage,
    trialUser
} from "../../../../support";

describe('Sign in with invalid email', () => {
    const {expect} = require("chai").use(require('chai-json-schema'));

    Given('I sign in with valid email and invalid password', () => {
        authenticateAPI
            .intercept();
        loginPage
            .open();
        loginPage
            .getEmailInputField()
            .type(trialUser.getEmail());
        loginPage
            .getPasswordInputField()
            .type(getRandomString(8));
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
})