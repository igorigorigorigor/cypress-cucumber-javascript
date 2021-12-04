import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import {
    authenticateAPI, authenticateAPIRequestJsonSchema,
    authenticateAPIResponseJsonSchema, salesOrdersPage,
    trialUser
} from "../../../../support";
const {expect} = require("chai").use(require('chai-json-schema'));
let requestResult;

Given('Request with valid email and password gets 200 OK and valid json response', async function () {
    const payload = {
        "client_id":authenticateAPI.getDefaultClientID(),
        "username":trialUser.getEmail(),
        "password":trialUser.getPassword(),
        "realm":authenticateAPI.getDefaultRealm(),
        "credential_type":authenticateAPI.getDefaultCredentialType()
    }
    authenticateAPI.makeRequest(payload)
        .then((resp) => {
            expect(resp.status).to.eq(200);
    })
});