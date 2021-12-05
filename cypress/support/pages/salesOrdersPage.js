class SalesOrdersPage {
    #path= Cypress.env("pageUrls").salesOrdersUrl

    open() {
        cy.visit(this.#path);
    }
    getSellTab() {
        return cy.contains('Sell');
    }
    getSalesOrdersTab() {
        return cy.contains('Sales orders');
    }
    getOpenTab() {
        return cy.get('[class=\'MuiTab-wrapper\']');
    }
}
export default SalesOrdersPage