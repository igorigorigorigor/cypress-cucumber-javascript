import './commands'
import User from "./roles/user";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import SalesOrdersPage from "./pages/salesOrdersPage";
import AuthenticateAPI from "./apis/authentication/authenticateAPI";

export const {
    authenticateAPIRequestJsonSchema,
    authenticateAPIResponseJsonSchema,
} = require('./apis/authentication/authenticateAPIRequestJsonSchema');
export const chai = require('chai');
export const crypto = require("crypto");
export const randomEmail = require('random-email');

export const trialUser= new User(
    Cypress.env('credentials').trialUser.email,
    Cypress.env('credentials').trialUser.password)

export const mainPage= new MainPage();
export const loginPage= new LoginPage();
export const salesOrdersPage= new SalesOrdersPage();

export const authenticateAPI= new AuthenticateAPI();

export default function getRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}