class AuthenticateAPI {
    static path=  Cypress.env("apiUrls").loginUrl
    static alias= 'post'
    static at_alias= '@post'

    intercept() {
        cy.intercept('POST', AuthenticateAPI.path).as(AuthenticateAPI.alias);
    }
    getInterceptedRequestBody() {
        return cy.wait(AuthenticateAPI.at_alias)
            .its('request.body');
    }
}
export default AuthenticateAPI