class LoginPage {
    #path= Cypress.env("pageUrls").loginUrl

    open() {
        cy.visit(this.#path);
    }
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