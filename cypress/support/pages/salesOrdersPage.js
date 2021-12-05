import BasePage from "./basePage";

class SalesOrdersPage extends BasePage {
    _path= Cypress.env("pageUrls").salesOrdersUrl

    getSellTab() {
        return cy.contains('Sell');
    }
    getSalesOrdersTab() {
        return cy.contains('Sales orders');
    }
    getOpenTab() {
        return cy.contains('Open');
    }
    getPlusButton() {
        return cy.get('#globalAdd');
    }
    getAddCustomerMenuItem() {
        return cy.get('#add-customer');
    }
}
export default SalesOrdersPage