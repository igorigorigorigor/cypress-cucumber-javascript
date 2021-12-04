class AuthenticateAPI {
    static path=  Cypress.env("apiUrls").loginUrl
    static alias= 'post'
    static at_alias= '@post'

    intercept() {
        cy.intercept('POST', AuthenticateAPI.path).as(AuthenticateAPI.alias);
    }
    getInterceptedRequestAndResponse() {
        return cy.wait(AuthenticateAPI.at_alias);
    }
}
export default AuthenticateAPI