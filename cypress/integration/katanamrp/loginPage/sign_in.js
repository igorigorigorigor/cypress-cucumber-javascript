import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/page_objects/loginPage";
import SalesOrdersPage from "../../../support/page_objects/salesOrdersPage";

const loginPage=new LoginPage();
const salesOrdersPage=new SalesOrdersPage();

beforeEach(() => {
    cy.intercept('POST', Cypress.env("apiUrls").loginUrl).as('post')
})

Given('I sign in with valid email and password', () => {
    loginPage.open();
    loginPage.getEmailInputField().type(Cypress.env('credentials').email);
    loginPage.getPasswordInputField().type(Cypress.env('credentials').password);
    loginPage.getSignInButton().click();
    cy.wait('@post')
        .its('request.body')
        .should('deep.include', {
            username: Cypress.env('credentials').email,
            password: Cypress.env('credentials').password
        })
});

Then(`I see "sales" page`, () => {

    salesOrdersPage.getSalesOrdersTitle()
        .should('be.visible');
});