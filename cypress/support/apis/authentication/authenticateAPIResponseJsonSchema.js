export const authenticateAPIResponseJsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "login_ticket": {
            "type": "string"
        },
        "co_verifier": {
            "type": "string"
        },
        "co_id": {
            "type": "string"
        }
    },
    "required": [
        "login_ticket",
        "co_verifier",
        "co_id"
    ]
}