import BasePage from "./basePage";

class LoginPage extends BasePage {
    _path= Cypress.env("pageUrls").loginUrl

    getEmailInputField() {
        return cy.get('[name=email]');
    }
    getPasswordInputField(){
        return cy.get('[name=password]');
    }
    getSignInButton(){
        return cy.get('[name=submit]');
    }
    getAuthError(){
        return cy.contains('Wrong email or password.');
    }
}
export default LoginPage