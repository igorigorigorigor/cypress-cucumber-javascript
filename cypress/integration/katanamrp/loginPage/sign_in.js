import { Given } from "cypress-cucumber-preprocessor/steps";
import {authenticateAPI, loginPage, salesOrdersPage, trialUser} from "../../../support";

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
    authenticateAPI.getInterceptedRequestBody()
        .should('deep.include', {
            username: trialUser.getEmail(),
            password: trialUser.getPassword()
        })
    salesOrdersPage
        .getSalesOrdersTitle()
        .should('be.visible');
});