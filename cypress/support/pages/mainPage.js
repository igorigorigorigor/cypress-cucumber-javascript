import BasePage from "./basePage";

class MainPage  extends BasePage{
    _path= Cypress.env("pageUrls").mainUrl
    
    getTitleText() {
        return cy.contains('Everything you need to keep manufacturing');
    }
    getCookiePolicyText(){
        return cy.contains('By visiting this website, you accept our cookie policy.');
    }
    getCookiePolicyAcceptButton(){
        return cy.contains('Got it!');
    }
}
export default MainPage