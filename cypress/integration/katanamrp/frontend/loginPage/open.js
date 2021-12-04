import { Given } from "cypress-cucumber-preprocessor/steps";
import {loginPage} from "../../../../support";

Given('I press "Sign in" button', () => {
    loginPage.open();
});

Then(`App shows "email" and "password" input fields`, () => {
    loginPage.getEmailInputField()
        .should('be.visible');
    loginPage.getPasswordInputField()
        .should('be.visible');
});