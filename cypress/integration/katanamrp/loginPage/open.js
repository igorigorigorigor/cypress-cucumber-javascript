import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pages/LoginPage";

Given('I press "Sign in" button', () => {
    LoginPage.open();
});

Then(`App shows "email" and "password" input fields`, () => {
    LoginPage.getEmailInputField()
        .should('be.visible');
    LoginPage.getPasswordInputField()
        .should('be.visible');
});