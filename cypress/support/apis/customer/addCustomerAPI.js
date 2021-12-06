import BasePostAPI from "../basePostAPI";

class AddCustomerAPI extends BasePostAPI {
    _url= Cypress.env("apiUrls").addCustomerUrl
    _origin= Cypress.env("apiUrls").origin
}
export default AddCustomerAPI