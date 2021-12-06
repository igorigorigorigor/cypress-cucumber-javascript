import BasePatchAPI from "../BasePatchAPI";

class EditCustomerAPI extends BasePatchAPI {
    _url= Cypress.env("apiUrls").editCustomerUrl
    _origin= Cypress.env("apiUrls").origin

    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }

}
export default EditCustomerAPI