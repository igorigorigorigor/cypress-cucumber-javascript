class BasePage {
    open() {
        cy.visit(this._path);
    }
}
export default BasePage