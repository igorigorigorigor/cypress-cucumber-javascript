import { Given } from "cypress-cucumber-preprocessor/steps";
import getRandomString, {
    authenticateAPI,
    authenticateAPIRequestJsonSchema,
    loginPage, randomEmail,
    salesOrdersPage,
    trialUser
} from "../../../../support";
const {expect} = require("chai").use(require('chai-json-schema'));

beforeEach(() => {
    authenticateAPI.intercept();
})

Given('I sign in with valid email and invalid password', () => {
    loginPage.open();
    loginPage.getEmailInputField().type(trialUser.getEmail());
    loginPage.getPasswordInputField().type(getRandomString(8));
    loginPage.getSignInButton().click();
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
        .getSalesOrdersTitle()
        .should('not.exist');
});