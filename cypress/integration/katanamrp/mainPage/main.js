import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open the main page', () => {
    cy.visit('/')
});

Then(`I see "Katana" in the title`, () => {
    cy.title()
        .should("include", 'Katana │ Manufacturing ERP Software for Total Visibility');
});