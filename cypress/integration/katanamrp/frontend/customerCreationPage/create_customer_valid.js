import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    customerCardPage,
    mainPage, salesOrdersPage, signIn, trialUser
} from "../../../../support";
import Customer from "../../../../support/models/customer";

const customer = new Customer();

Given('I fill in all customer fields', () => {
    signIn(trialUser.getEmail(), trialUser.getPassword())
    customerCardPage.open();
});

Then(`App creates customer for the current user`, () => {
    customerCardPage
        .getCustomerTitle()
        .should('be.visible');
    customerCardPage
        .getFirstNameInputField()
        .should('be.visible')
        .type(customer.firstName);
    customerCardPage
        .getLastNameInputField()
        .should('be.visible')
        .type(customer.lastName);
    customerCardPage
        .getCompanyNameInputField()
        .should('be.visible')
        .type(customer.companyName);
    customerCardPage
        .getDisplayNameInputField()
        .should('be.visible')
        .type(customer.displayName);
    customerCardPage
        .getEmailInputField()
        .should('be.visible')
        .type(customer.email);
    customerCardPage
        .getPhoneInputField()
        .should('be.visible')
        .type(customer.phone);
    customerCardPage
        .getCommentInputField()
        .should('be.visible')
        .type(customer.comment);
    customerCardPage
        .getBillingAddressInputField()
        .should('be.visible')
        .type(customer.billingAddress);
    customerCardPage
        .getDefaultShippingAddressInputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress);
});