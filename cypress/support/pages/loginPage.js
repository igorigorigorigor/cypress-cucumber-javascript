class LoginPage {
    static path= Cypress.env('pageUrls').loginUrl

    static open() {
        cy.visit(LoginPage.path);
    }
    static getEmailInputField() {
        return cy.get('[name=email]');
    }
    static getPasswordInputField(){
        return cy.get('[name=password]');
    }
    static getSignInButton(){
        return cy.get('[name=submit]');
    }
}
export default LoginPage