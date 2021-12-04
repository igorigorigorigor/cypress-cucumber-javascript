class MainPage {
    static path= Cypress.env('pageUrls').mainUrl

    static open() {
        cy.visit(MainPage.path);
    }
    static getTitleText() {
        return cy.contains('Everything you need to keep manufacturing');
    }
    static getCookiePolicyText(){
        return cy.contains('By visiting this website, you accept our cookie policy.');
    }
    static getCookiePolicyAcceptButton(){
        return cy.contains('Got it!');
    }
}
export default MainPage