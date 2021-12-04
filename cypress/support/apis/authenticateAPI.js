class AuthenticateAPI {
    static path=  Cypress.env("apiUrls").loginUrl
    static alias= 'post'
    static at_alias= '@post'

    static intercept() {
        cy.intercept('POST', AuthenticateAPI.path).as('post')
    }
    static getInterceptedRequestBody() {
        return cy.wait('@post')
            .its('request.body')
    }
}
export default AuthenticateAPI