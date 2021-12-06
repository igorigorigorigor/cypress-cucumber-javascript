class AddressDialog {
    getTitle() {
        return cy.get('[role=dialog]').contains('Address');
    }
    getFirstNameInputField() {
        return cy.get('[role=dialog] [name=firstName]')
    }
    getLastNameInputField() {
        return cy.get('[role=dialog] [name=lastName]')
    }
    getCompanyInputField() {
        return cy.get('[role=dialog] [name=company]')
    }
    getPhoneInputField() {
        return cy.get('[role=dialog] [name=phone]')
    }
    getAddressLine1InputField() {
        return cy.get('[role=dialog] [name=line1]')
    }
    getAddressLine2InputField() {
        return cy.get('[role=dialog] [name=line2]')
    }
    getCityInputField() {
        return cy.get('[role=dialog] [name=city]')
    }
    getStateInputField() {
        return cy.get('[role=dialog] [name=state]')
    }
    getZipInputField() {
        return cy.get('[role=dialog] [name=zip]')
    }
    getCountryInputField() {
        return cy.get('[role=dialog] [name=country]')
    }
    getSubmitButton() {
        return cy.get('[role=dialog] [id=submitButton]')
    }
}
export default AddressDialog

