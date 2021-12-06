export const addCustomerAPIRequestJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "name": {
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