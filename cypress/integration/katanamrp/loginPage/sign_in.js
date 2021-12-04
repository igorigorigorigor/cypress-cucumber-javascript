import { Given } from "cypress-cucumber-preprocessor/steps";
import {authenticateAPI, loginPage, salesOrdersPage, trialUser} from "../../../support";

export const {
    authenticateAPIRequestJsonSchema,
} = require('../../../support/apis/authentication/authenticateAPIRequestJsonSchema');
const {expect} = require("chai").use(require('chai-json-schema'));
const chai = require('chai');

beforeEach(() => {
    authenticateAPI.intercept();
})

Given('I sign in with valid email and password', () => {
    loginPage.open();
    loginPage.getEmailInputField().type(trialUser.getEmail());
    loginPage.getPasswordInputField().type(trialUser.getPassword());
    loginPage.getSignInButton().click();
});

Then(`App makes request to authenticate api and redirects to "sales" page`, () => {
    authenticateAPI
        .getInterceptedRequestAndResponse().should((
            { request, response }) => {
        expect(request.body).to.be.jsonSchema(authenticateAPIRequestJsonSchema);
        expect(request.body).to.deep.include( {
            username: trialUser.getEmail(),
            password: trialUser.getPassword()
        });
        expect(response.statusCode).to.eq(200)
    })
    salesOrdersPage
        .getSalesOrdersTitle()
        .should('be.visible');
});