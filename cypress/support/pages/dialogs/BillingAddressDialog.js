import AddressDialog from "./AddressDialog";

class BillingAddressDialog extends AddressDialog{
    getTitle() {
        return cy.get('[role=dialog]').contains('Billing Address');
    }
}
export default BillingAddressDialog

