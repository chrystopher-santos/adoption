class EncryptionService {
    crypto

    constructor() {
        this.crypto = require("crypto")
    }

    encrypt(password) {
        const salt = this.generateSalt()
        const hash = this.crypto.createHmac('sha512', salt)
        hash.update(password)
        return {
            salt,
            hash: hash.digest()
        }
    }

    decrypt(password, saltHash, storedHash) {
        const hash = this.crypto.createHmac('sha512', saltHash)
        hash.update(password)
        const createdHash = hash.digest()

        return createdHash.toString('hex') === storedHash.toString('hex')
    }

    generateSalt() {
        return this.crypto.randomBytes(16)
    }
}

module.exports = {
    EncryptionService
}