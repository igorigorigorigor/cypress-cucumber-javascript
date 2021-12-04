export const authenticateAPIRequestJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "client_id": {
            "type": "string"
        },
        "username": {
            "type": "string"
        },
        "password": {
            "type": "string"
        },
        "realm": {
            "type": "string"
        },
        "credential_type": {
            "type": "string"
        }
    },
    "required": [
        "client_id",
        "username",
        "password",
        "realm",
        "credential_type"
    ]
}