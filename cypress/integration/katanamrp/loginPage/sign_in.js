import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/page_objects/loginPage";
import SalesOrdersPage from "../../../support/page_objects/salesOrdersPage";

const loginPage=new LoginPage();
const salesOrdersPage=new SalesOrdersPage();

Given('I sign in with valid email and password', () => {
    loginPage.open();
    loginPage.getEmailInputField().type(Cypress.env('email'));
    loginPage.getPasswordInputField().type(Cypress.env('password'));
    loginPage.getSignInButton().click();
});

Then(`I see "sales" page`, () => {
    salesOrdersPage.getSalesOrdersTitle()
        .should('be.visible');
});