import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import {
    authenticateAPI,
    authenticateAPIResponseJsonSchema,
    trialUser
} from "../../../../support";
const {expect} = require("chai").use(require('chai-json-schema'));
let requestResult;

Given('Request with valid email and password gets status-code {int} and valid json response', status_code => {
    const payload = {
        "client_id":authenticateAPI.getDefaultClientID(),
        "username":trialUser.getEmail(),
        "password":trialUser.getPassword(),
        "realm":authenticateAPI.getDefaultRealm(),
        "credential_type":authenticateAPI.getDefaultCredentialType()
    }
    authenticateAPI.makeRequest(payload)
        .then((resp) => {
            expect(resp.status).to.eq(status_code);
            expect(resp.body).to.be.jsonSchema(authenticateAPIResponseJsonSchema);
        })
});