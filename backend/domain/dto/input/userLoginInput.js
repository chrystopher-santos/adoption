class UserLoginInput {
    email
    password

    constructor(email, password) {
        this.email = email
        this.password = password
    }
}

module.exports = {
    UserLoginInput
}