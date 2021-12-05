import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    addCustomerAPI,
    authenticateAPI, authenticateAPIRequestJsonSchema,
    billingAddressDialog,
    customerCardPage,
    mainPage, salesOrdersPage, shippingAddressDialog, signIn, trialUser
} from "../../../../support";
import Customer from "../../../../support/models/customer";
import {addCustomerAPIRequestJsonSchema} from "../../../../support/apis/customer/addCustomerAPIRequestJsonSchema";

const {expect} = require("chai").use(require('chai-json-schema'));

const customer = new Customer();

Given('I fill in all customer fields', () => {
    signIn(trialUser.getEmail(), trialUser.getPassword())
    customerCardPage.open();
});

Then(`App creates customer for the current user`, () => {
    addCustomerAPI.intercept();
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
    addCustomerAPI
        .getInterceptedRequestAndResponse().should((
        { request, response }) => {
        expect(request.body).to.be.jsonSchema(addCustomerAPIRequestJsonSchema);
        expect(request.body).to.deep.include( {
            firstName: customer.firstName,
            name: customer.firstName
        });
        expect(response.statusCode).to.eq(200)
    });
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
        .click();
    billingAddressDialog
        .getTitle()
        .should('be.visible');
    billingAddressDialog
        .getFirstNameInputField()
        .should('be.visible')
        .type(customer.firstName);
    billingAddressDialog
        .getLastNameInputField()
        .should('be.visible')
        .type(customer.lastName);
    billingAddressDialog
        .getCompanyInputField()
        .should('be.visible')
        .type(customer.companyName);
    billingAddressDialog
        .getPhoneInputField()
        .should('be.visible')
        .type(customer.phone);
    billingAddressDialog
        .getAddressLine1InputField()
        .should('be.visible')
        .type(customer.billingAddress.addressLine1);
    billingAddressDialog
        .getAddressLine2InputField()
        .should('be.visible')
        .type(customer.billingAddress.addressLine2);
    billingAddressDialog
        .getCityInputField()
        .should('be.visible')
        .type(customer.billingAddress.city);
    billingAddressDialog
        .getStateInputField()
        .should('be.visible')
        .type(customer.billingAddress.state);
    billingAddressDialog
        .getZipInputField()
        .should('be.visible')
        .type(customer.billingAddress.zip);
    billingAddressDialog
        .getCountryInputField()
        .should('be.visible')
        .type(customer.billingAddress.country);
    billingAddressDialog
        .getSubmitButton()
        .should('be.visible')
        .click();

    customerCardPage
        .getDefaultShippingAddressInputField()
        .should('be.visible')
        .click();
    shippingAddressDialog
        .getTitle()
        .should('be.visible');
    shippingAddressDialog
        .getFirstNameInputField()
        .should('be.visible')
        .type(customer.firstName);
    shippingAddressDialog
        .getLastNameInputField()
        .should('be.visible')
        .type(customer.lastName);
    shippingAddressDialog
        .getCompanyInputField()
        .should('be.visible')
        .type(customer.companyName);
    shippingAddressDialog
        .getPhoneInputField()
        .should('be.visible')
        .type(customer.phone);
    shippingAddressDialog
        .getAddressLine1InputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.addressLine1);
    shippingAddressDialog
        .getAddressLine2InputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.addressLine2);
    shippingAddressDialog
        .getCityInputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.city);
    shippingAddressDialog
        .getStateInputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.state);
    shippingAddressDialog
        .getZipInputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.zip);
    shippingAddressDialog
        .getCountryInputField()
        .should('be.visible')
        .type(customer.defaultShippingAddress.country);
    shippingAddressDialog
        .getSubmitButton()
        .should('be.visible')
        .click();
});