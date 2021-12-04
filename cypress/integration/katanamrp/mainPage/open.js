import { Given } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../support/pages/MainPage";

Given('I open the main page', () => {
    MainPage.open();
});

Then(`I see "Katana" in the title and "accept our cookie policy" pop-up`, () => {
    MainPage.getTitleText()
        .should('be.visible')
    MainPage.getCookiePolicyText()
        .should('be.visible');
    MainPage.getCookiePolicyAcceptButton()
        .should('be.visible');
});