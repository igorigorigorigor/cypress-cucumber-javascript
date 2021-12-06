import { Given } from "cypress-cucumber-preprocessor/steps";
import {signIn, salesOrdersPage, trialUser} from "../../../../support";

Given('I open the sales page', () => {
    signIn(trialUser.getEmail(), trialUser.getPassword());
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