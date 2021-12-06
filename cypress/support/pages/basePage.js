class BasePage {
    _path;

    open() {
        cy.visit(this._path);
    }
}
export default BasePage