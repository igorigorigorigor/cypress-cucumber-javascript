class LoginPage {
    static path= Cypress.env('login_url')

    open() {
        cy.visit(LoginPage.path)
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
}
export default LoginPage