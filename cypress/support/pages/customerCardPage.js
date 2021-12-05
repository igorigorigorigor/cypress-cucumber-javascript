import BasePage from "./basePage";

class CustomerCardPage  extends BasePage {
    _path= Cypress.env("pageUrls").customerCardUrl

    getCustomerTitle() {
        return cy.contains('Customer');
    }
    getFirstNameTitle() {
        return cy.contains('First name');
    }
    getFirstNameInputField() {
        return cy.get('[name=firstName]');
    }
    getLastNameTitle() {
        return cy.contains('Last name');
    }
    getLastNameInputField() {
        return cy.get('[name=lastName]');
    }
    getCompanyNameTitle() {
        return cy.contains('Company name');
    }
    getCompanyNameInputField() {
        return cy.get('[name=company]');
    }
    getDisplayNameTitle() {
        return cy.contains('Display name');
    }
    getDisplayNameInputField() {
        return cy.get('[name=name]');
    }
    getEmailTitle() {
        return cy.contains('Email');
    }
    getEmailInputField() {
        return cy.get('[name=email]');
    }
    getPhoneTitle() {
        return cy.contains('Phone');
    }
    getPhoneInputField() {
        return cy.get('[name=phone]');
    }
    getCommentTitle() {
        return cy.contains('Comment');
    }
    getCommentInputField() {
        return cy.get('[name=comment]');
    }
    getBillingAddressTitle() {
        return cy.contains('Billing address');
    }
    getBillingAddressInputField() {
        return cy.get('[name=defaultBillingAddress]');
    }
    getDefaultShippingAddressTitle() {
        return cy.contains('Default shipping address');
    }
    getDefaultShippingAddressInputField() {
        return cy.get('[name=defaultShippingAddress]');
    }
}
export default CustomerCardPage