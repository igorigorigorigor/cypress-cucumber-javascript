class MainPage {
    static path= Cypress.env('pageUrls').mainUrl

    open() {
        cy.visit(MainPage.path);
    }
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