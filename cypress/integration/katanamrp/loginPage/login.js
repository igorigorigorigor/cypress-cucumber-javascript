import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I press "Sign in" button', () => {
    cy.visit('/')
    cy.contains('Got it!').click();
    cy.get('[class="icon  header__toggle-icon header__toggle-icon--open"]').click();
    cy.contains('Sign in').click();
});

Then(`I see "email" and "password" input fields`, () => {
    cy.get('[name=email]')
        .should('be.visible');
    cy.get('[name=password]')
        .should('be.visible');
});