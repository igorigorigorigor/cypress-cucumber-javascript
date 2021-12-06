export const editCustomerAPIRequestJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "factoryId": {
            "type": "integer"
        },
        "defaultShippingId": {
            "type": "integer"
        },
        "phone": {
            "type": "string"
        },
        "updatedAt": {
            "type": "string"
        },
        "currency": {
            "type": "string"
        },
        "defaultBillingId": {
            "type": "integer"
        },
        "id": {
            "type": "integer"
        },
        "createdAt": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "company": {
            "type": "string"
        },
        "comment": {
            "type": "string"
        },
        "addresses": {
            "type": "array"
        }
    },
    "required": [
        "firstName",
        "name",
        "addresses"
    ]
}