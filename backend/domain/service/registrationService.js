const { UserEntity } = require("../aggregate/userEntity")
const { ContactValueObject } = require("../aggregate/valueObject/contactValueObject")
const { NameValueObject } = require("../aggregate/valueObject/nameValueObject")
const { RegisteredEmailError } = require("../errors/registeredEmailError")

class RegistrationService {
    constructor(userService, encryptionService) {
        this.userService = userService
        this.encryptionService = encryptionService
    }

    async register(userRegistrationInput) {
        const email = userRegistrationInput.email
        UserEntity.validateEmail(email)
        const storedUser = await this.userService.getToLogin(email)

        if (storedUser) {
            throw new RegisteredEmailError(`The ${email} email has already been registered`)
        }

        const { salt, hash } = this.encryptionService.encrypt(userRegistrationInput.password)
        const nameValueObject = new NameValueObject(
            userRegistrationInput.firstName,
            userRegistrationInput.lastName
        )
        const contactValueObject = new ContactValueObject(
            userRegistrationInput.ddd,
            userRegistrationInput.number
        )
        const user = new UserEntity(
            email,
            salt,
            hash,
            nameValueObject,
            contactValueObject
        )

        await this.userService.add(user)
    }
}

module.exports = {
    RegistrationService
}