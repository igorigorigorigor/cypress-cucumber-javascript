class SalesOrdersPage {
    static path= Cypress.env('sales_orders_url')

    open() {
        cy.visit(SalesOrdersPage.path)
    }
    getSalesOrdersTitle() {
        return cy.contains('Sales orders');
    }
}
export default SalesOrdersPage