class SalesOrdersPage {
    static path= Cypress.env('sales_orders_url')

    static open() {
        cy.visit(SalesOrdersPage.path);
    }
    static getSalesOrdersTitle() {
        return cy.contains('Sales orders');
    }
}
export default SalesOrdersPage