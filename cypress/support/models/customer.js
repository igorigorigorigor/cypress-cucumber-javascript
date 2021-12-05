import {getRandomString, getRandomEmail, getRandomPhoneNumber} from "../index";
import Address from "./address";

class Customer {
    _firstName;
    _lastName;
    _companyName;
    _displayName;
    _email;
    _phone;
    _comment;
    _billingAddress;
    _defaultShippingAddress;

    constructor(firstName = getRandomString(10),
                lastName = getRandomString(10),
                companyName = getRandomString(10),
                displayName = getRandomString(10),
                email = getRandomEmail(),
                phone = getRandomPhoneNumber() ,
                comment = getRandomString(10),
                billingAddress = new Address(),
                defaultShippingAddress = new Address()) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._companyName = companyName;
        this._displayName = displayName;
        this._email = email;
        this._phone = phone;
        this._comment = comment;
        this._billingAddress = billingAddress;
        this._defaultShippingAddress = defaultShippingAddress;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get companyName() {
        return this._companyName;
    }

    set companyName(value) {
        this._companyName = value;
    }

    get displayName() {
        return this._displayName;
    }

    set displayName(value) {
        this._displayName = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
    }

    get billingAddress() {
        return this._billingAddress;
    }

    set billingAddress(value) {
        this._billingAddress = value;
    }

    get defaultShippingAddress() {
        return this._defaultShippingAddress;
    }

    set defaultShippingAddress(value) {
        this._defaultShippingAddress = value;
    }
}
export default Customer