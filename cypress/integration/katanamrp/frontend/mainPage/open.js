import { Given } from "cypress-cucumber-preprocessor/steps";
import {
    mainPage
} from "../../../../support";

Given('I open the main page', () => {
    mainPage.open();
});

Then(`I see "Katana" in the title and "accept our cookie policy" pop-up`, () => {
    mainPage.getTitleText()
        .should('be.visible')
    mainPage.getCookiePolicyText()
        .should('be.visible');
    mainPage.getCookiePolicyAcceptButton()
        .should('be.visible');
});