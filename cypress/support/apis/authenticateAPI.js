class AuthenticateAPI {
    static path=  Cypress.env("apiUrls").loginUrl
    static alias= 'AuthenticateAPI'

    intercept() {
        cy.intercept('POST', AuthenticateAPI.path).as(AuthenticateAPI.alias)
    }
    getInterceptedRequestBody() {
        cy.wait('@post')
            .its('request.body')
    }
}
export default AuthenticateAPI