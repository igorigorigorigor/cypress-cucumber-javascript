import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    customersPage,
    mainPage, salesOrdersPage, signIn, trialUser
} from "../../../../support";

Given('I open the customer creation page', () => {
    signIn(trialUser.getEmail(), trialUser.getPassword())
    customersPage.open();
});

Then(`App returns "customer card" page for the current user`, () => {
    salesOrdersPage
        .getSellTab()
        .should('be.visible');
    salesOrdersPage
        .getPlusButton()
        .should('be.visible')
        .click();
    salesOrdersPage
        .getAddCustomerMenuItem()
        .should('be.visible')
        .click();
    customersPage
        .getCustomerTitle()
        .should('be.visible');
    customersPage
        .getFirstNameTitle()
        .should('be.visible');
    customersPage
        .getLastNameTitle()
        .should('be.visible');
    customersPage
        .getCompanyNameTitle()
        .should('be.visible');
    customersPage
        .getDisplayNameTitle()
        .should('be.visible');
    customersPage
        .getEmailTitle()
        .should('be.visible');
    customersPage
        .getPhoneTitle()
        .should('be.visible');
    customersPage
        .getCommentTitle()
        .should('be.visible');
    customersPage
        .getBillingAddressTitle()
        .should('be.visible');
    customersPage
        .getDefaultShippingAddressTitle()
        .should('be.visible');

    customersPage
        .getFirstNameInputField()
        .should('be.visible');
    customersPage
        .getLastNameInputField()
        .should('be.visible');
    customersPage
        .getCompanyNameInputField()
        .should('be.visible');
    customersPage
        .getDisplayNameInputField()
        .should('be.visible');
    customersPage
        .getEmailInputField()
        .should('be.visible');
    customersPage
        .getPhoneInputField()
        .should('be.visible');
    customersPage
        .getCommentInputField()
        .should('be.visible');
    customersPage
        .getBillingAddressInputField()
        .should('be.visible');
    customersPage
        .getDefaultShippingAddressInputField()
        .should('be.visible');
});