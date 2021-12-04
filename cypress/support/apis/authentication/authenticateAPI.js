class AuthenticateAPI {
    #client_id= Cypress.env("credentials").params.client_id
    #realm= Cypress.env("credentials").params.realm
    #credential_type= Cypress.env("credentials").params.credential_type
    #origin= Cypress.env("credentials").params.origin
    #url= Cypress.env("apiUrls").loginUrl
    #content_type= 'application/json'
    #method= 'POST'
    #alias= 'post'
    #at_alias= '@post'

    intercept() {
        cy.intercept('POST', this.#url).as(this.#alias);
    }
    getInterceptedRequestAndResponse() {
        return cy.wait(this.#at_alias);
    }
    makeRequest(payload) {
        return cy.request({
            method: this.#method,
            url: this.#url,
            headers: {
                'Content-Type': this.#content_type,
                'Origin': this.#origin
            },
            body: payload});
    }
    getDefaultClientID() {
        return this.#client_id;
    }
    getDefaultRealm() {
        return this.#realm;
    }
    getDefaultCredentialType() {
        return this.#credential_type;
    }
    getDefaultOrigin() {
        return this.#origin;
    }
    getDefaultContentType() {
        return this.#content_type;
    }
}
export default AuthenticateAPI