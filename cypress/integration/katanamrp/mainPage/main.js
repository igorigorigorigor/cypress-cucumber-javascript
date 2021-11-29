import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open the main page', () => {
    cy.visit('/')
});

Then(`I see "Katana" in the title and "accept our cookie policy" pop-up`, () => {
    cy.title()
        .should("have.value", 'Katana │ Manufacturing ERP Software for Total Visibility');
    cy.contains('By visiting this website, you accept our cookie policy.')
        .should('be.visible');
    cy.contains('Got it!')
        .should('be.visible');
});