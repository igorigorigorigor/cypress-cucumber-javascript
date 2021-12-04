import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";
import SalesOrdersPage from "../../../support/pages/salesOrdersPage";
import AuthenticateAPI from "../../../support/apis/authenticateAPI";
import User from "../../../support/roles/user";

const authenticateAPI = new AuthenticateAPI();
const trialUser= new User(Cypress.env('credentials').trialUser.email,
    Cypress.env('credentials').trialUser.password)

beforeEach(() => {
    AuthenticateAPI.intercept();
})

Given('I sign in with valid email and password', () => {
    LoginPage.open();
    LoginPage.getEmailInputField().type(trialUser.getEmail());
    LoginPage.getPasswordInputField().type(trialUser.getPassword());
    LoginPage.getSignInButton().click();
});

Then(`App makes request to authenticate api and redirects to "sales" page`, () => {
    AuthenticateAPI.getInterceptedRequestBody()
        .should('deep.include', {
            username: trialUser.getEmail(),
            password: trialUser.getPassword()
        })
    SalesOrdersPage
        .getSalesOrdersTitle()
        .should('be.visible');
});