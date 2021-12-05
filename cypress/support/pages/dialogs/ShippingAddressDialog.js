import AddressDialog from "./AddressDialog";

class ShippingAddressDialog extends AddressDialog{
    getTitle() {
        return cy.get('[role=dialog]').contains('Shipping Address');
    }
}
export default ShippingAddressDialog

