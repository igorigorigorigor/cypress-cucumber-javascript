import BasePostAPI from "../basePostAPI";

class AuthenticateAPI extends BasePostAPI {
    _client_id= Cypress.env("credentials").params.client_id
    _realm= Cypress.env("credentials").params.realm
    _credential_type= Cypress.env("credentials").params.credential_type
    _origin= Cypress.env("credentials").params.origin
    _url= Cypress.env("apiUrls").loginUrl

    getDefaultClientID() {
        return this._client_id;
    }
    getDefaultRealm() {
        return this._realm;
    }
    getDefaultCredentialType() {
        return this._credential_type;
    }
    getDefaultOrigin() {
        return this._origin;
    }
}
export default AuthenticateAPI