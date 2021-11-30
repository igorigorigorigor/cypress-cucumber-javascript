import { Given } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../../../support/page_objects/mainPage";

const mainPage=new MainPage();

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