import {getRandomNumber, getRandomString} from "../index";

class Address {
    _addressLine1;
    _addressLine2;
    _city;
    _state;
    _zip;
    _country;

    constructor(addressLine1 = getRandomString(10),
                addressLine2 = getRandomString(10),
                city = getRandomString(10),
                state = getRandomString(10),
                zip = getRandomNumber(6),
                country = getRandomString(10)) {
        this._addressLine1 = addressLine1;
        this._addressLine2 = addressLine2;
        this._city = city;
        this._state = state;
        this._zip = zip;
        this._country = country;
    }

    get addressLine1() {
        return this._addressLine1;
    }

    set addressLine1(value) {
        this._addressLine1 = value;
    }

    get addressLine2() {
        return this._addressLine2;
    }

    set addressLine2(value) {
        this._addressLine2 = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}
export default Address