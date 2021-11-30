import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/page_objects/loginPage";

const loginPage=new LoginPage();

Given('I press "Sign in" button', () => {
    loginPage.open();
});

Then(`I see "email" and "password" input fields`, () => {
    loginPage.getEmailInputField()
        .should('be.visible');
    loginPage.getPasswordInputField()
        .should('be.visible');
});