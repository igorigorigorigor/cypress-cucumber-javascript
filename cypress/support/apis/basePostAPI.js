class BasePostAPI {
    _method= 'POST'
    _alias= 'post'
    _at_alias= '@post'
    _content_type= 'application/json'

    makeRequest(payload) {
        return cy.request({
            method: this._method,
            url: this._url,
            headers: {
                'Content-Type': this._content_type,
                'Origin': this._origin
            },
            body: payload});
    }
    intercept() {
        cy.intercept(this._method, this._url).as(this._alias);
    }
    getInterceptedRequestAndResponse() {
        return cy.wait(this._at_alias);
    }
    getDefaultContentType() {
        return this._content_type;
    }
}
export default BasePostAPI