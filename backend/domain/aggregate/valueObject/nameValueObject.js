const { InvalidArgumentError } = require("../../errors/invalidArgumentError")

class NameValueObject {
    firstName
    lastName

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

        this.validateValueObject()
    }

    validateValueObject() {
        this.validateFirstName(this.firstName)
        this.validateLastName(this.lastName)
    }

    validateFirstName(firstName) {
        if (!firstName || firstName === "") {
            throw new InvalidArgumentError("firstName argument cannot be null and empty")
        }
    }

    validateLastName(lastName) {
        if (!lastName || lastName === "") {
            throw new InvalidArgumentError("lastName argument cannot be null and empty")
        }
    }
}

module.exports = {
    NameValueObject
}