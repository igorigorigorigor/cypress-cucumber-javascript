import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/loginPage";
import SalesOrdersPage from "../../../support/pages/salesOrdersPage";
import AuthenticateAPI from "../../../support/apis/authenticateAPI";
import User from "../../../support/roles/user";

const loginPage=new LoginPage();
const salesOrdersPage=new SalesOrdersPage();
const trialUser= new User(Cypress.env('credentials').trialUser.email,
    Cypress.env('credentials').trialUser.password)

beforeEach(() => {
    cy.intercept('POST', AuthenticateAPI.path).as('post')
})

Given('I sign in with valid email and password', () => {
    loginPage.open();
    loginPage.getEmailInputField().type(trialUser.getEmail());
    loginPage.getPasswordInputField().type(trialUser.getPassword());
    loginPage.getSignInButton().click();
});

Then(`App makes request to authenticate api and redirects to "sales" page`, () => {
    cy.wait('@post')
        .its('request.body')
        .should('deep.include', {
            username: trialUser.getEmail(),
            password: trialUser.getPassword()
        })
    salesOrdersPage.getSalesOrdersTitle()
        .should('be.visible');
});