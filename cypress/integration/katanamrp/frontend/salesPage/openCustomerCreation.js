import { Given } from "cypress-cucumber-preprocessor/steps";
import {signIn, customerCardPage, salesOrdersPage, trialUser} from "../../../../support";

describe('Open customer creation page', () => {
    beforeEach(() => {
        signIn(trialUser.getEmail(), trialUser.getPassword());
    })

    Given('I press "+" button and select "Customer" option', () => {
        salesOrdersPage.open();
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
        customerCardPage
            .getCustomerTitle()
            .should('be.visible');
        customerCardPage
            .getFirstNameTitle()
            .should('be.visible');
        customerCardPage
            .getLastNameTitle()
            .should('be.visible');
        customerCardPage
            .getCompanyNameTitle()
            .should('be.visible');
        customerCardPage
            .getDisplayNameTitle()
            .should('be.visible');
        customerCardPage
            .getEmailTitle()
            .should('be.visible');
        customerCardPage
            .getPhoneTitle()
            .should('be.visible');
        customerCardPage
            .getCommentTitle()
            .should('be.visible');
        customerCardPage
            .getBillingAddressTitle()
            .should('be.visible');
        customerCardPage
            .getDefaultShippingAddressTitle()
            .should('be.visible');

        customerCardPage
            .getFirstNameInputField()
            .should('be.visible');
        customerCardPage
            .getLastNameInputField()
            .should('be.visible');
        customerCardPage
            .getCompanyNameInputField()
            .should('be.visible');
        customerCardPage
            .getDisplayNameInputField()
            .should('be.visible');
        customerCardPage
            .getEmailInputField()
            .should('be.visible');
        customerCardPage
            .getPhoneInputField()
            .should('be.visible');
        customerCardPage
            .getCommentInputField()
            .should('be.visible');
        customerCardPage
            .getBillingAddressInputField()
            .should('be.visible');
        customerCardPage
            .getDefaultShippingAddressInputField()
            .should('be.visible');
    });
})