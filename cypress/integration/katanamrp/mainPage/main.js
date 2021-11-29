import { Given } from "cypress-cucumber-preprocessor/steps";

const PATH = '/'
const SELECTORS = {
    getTitleText: () => cy.contains('Everything you need to keep manufacturing'),
    getCookiePolicyText: () => cy.contains('By visiting this website, you accept our cookie policy.'),
    getCookiePolicyAcceptButton: () => cy.contains('Got it!'),
}

Given('I open the main page', () => {
    cy.visit(PATH)
});

Then(`I see "Katana" in the title and "accept our cookie policy" pop-up`, () => {
    SELECTORS.getTitleText()
        .should('be.visible')
    SELECTORS.getCookiePolicyText()
        .should('be.visible');
    SELECTORS.getCookiePolicyAcceptButton()
        .should('be.visible');
});