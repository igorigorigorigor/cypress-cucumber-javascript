import { Given } from "cypress-cucumber-preprocessor/steps";
import {authenticateAPI, mainPage, salesOrdersPage, trialUser} from "../../../../support";

beforeEach(() => {
    cy.sign_in(trialUser.getEmail(), trialUser.getPassword());
})

Given('I open the sales page', () => {
    salesOrdersPage.open();
});

Then(`App returns "sales" page with "orders" tab for the current user`, () => {
    salesOrdersPage.getSellTab()
        .should('be.visible');
    salesOrdersPage.getSalesOrdersTab()
        .should('be.visible');
    salesOrdersPage.getOpenTab()
        .should('be.visible')
});