import './commands'
import User from "./roles/user";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import SalesOrdersPage from "./pages/salesOrdersPage";
import CustomerCardPage from "./pages/customerCardPage";
import AuthenticateAPI from "./apis/authentication/authenticateAPI";
import AddressDialog from "./pages/dialogs/AddressDialog";
import BillingAddressDialog from "./pages/dialogs/BillingAddressDialog";
import ShippingAddressDialog from "./pages/dialogs/ShippingAddressDialog";

export const {authenticateAPIRequestJsonSchema} = require('./apis/authentication/authenticateAPIRequestJsonSchema');
export const {authenticateAPIResponseJsonSchema} = require('./apis/authentication/authenticateAPIResponseJsonSchema');
export const chai = require('chai');
export const crypto = require("crypto");
export const getRandomEmail = require('random-email');

export const trialUser= new User(
    Cypress.env('credentials').trialUser.email,
    Cypress.env('credentials').trialUser.password)

export const mainPage= new MainPage();
export const loginPage= new LoginPage();
export const salesOrdersPage= new SalesOrdersPage();
export const customerCardPage= new CustomerCardPage();
export const billingAddressDialog= new BillingAddressDialog();
export const shippingAddressDialog= new ShippingAddressDialog();

export const authenticateAPI= new AuthenticateAPI();

export function getRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}
export function getRandomPhoneNumber() {
    return Math.floor(100000000 + Math.random() * 900000000);
}
export function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

export function signIn(email, password){
    loginPage.open();
    loginPage.getEmailInputField().type(email);
    loginPage.getPasswordInputField().type(password);
    loginPage.getSignInButton().click();
    salesOrdersPage.getSellTab();
}