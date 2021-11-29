import { Given } from "cypress-cucumber-preprocessor/steps";

const PATH = '/login'
const SELECTORS = {
    getEmailInputField: () => cy.get('[name=email]'),
    getPasswordInputField: () => cy.get('[name=password]'),
}

Given('I press "Sign in" button', () => {
    cy.visit(PATH)
});

Then(`I see "email" and "password" input fields`, () => {
    SELECTORS.getEmailInputField()
        .should('be.visible');
    SELECTORS.getPasswordInputField()
        .should('be.visible');
});