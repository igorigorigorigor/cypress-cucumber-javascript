import './commands'
import User from "./roles/user";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import SalesOrdersPage from "./pages/salesOrdersPage";
import AuthenticateAPI from "./apis/authentication/authenticateAPI";

export const trialUser= new User(Cypress.env('credentials').trialUser.email,
    Cypress.env('credentials').trialUser.password)

export const mainPage= new MainPage();
export const loginPage= new LoginPage();
export const salesOrdersPage= new SalesOrdersPage();

export const authenticateAPI= new AuthenticateAPI();