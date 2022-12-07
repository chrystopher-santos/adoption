const { UserEntity } = require('../../domain/aggregate/userEntity')

const { ContactValueObject } = require('../../domain/aggregate/valueObject/contactValueObject')

class UserRepository {
    context

    constructor(context) {
        this.context = context
    }

    async add(user) {
        const database = await this.context.createDatabase()

        const sql = `
        INSERT INTO User (
            Email,
            SaltHash,
            StoredHash,
            Name_FirstName,
            Name_LastName,
            Contact_Ddd,
            Contact_Number
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )`

        const params = [
            user.email,
            user.saltHash,
            user.storedHash,
            user.name.firstName,
            user.name.lastName,
            user.contact.ddd,
            user.contact.number,
            // user.contact.type
        ]

        this.context.run(database, sql, params)
        return this.context.closeDatabase(database)
    }

    async getById(id) {
        const sql = `
        SELECT *
        FROM User
        WHERE Id = ?`

        const params = [
            id
        ]

        return this.get(sql, params)
    }

    async getByEmail(email) {
        const sql = `
        SELECT *
        FROM User
        WHERE Email = ?`

        const params = [
            email
        ]

        return this.get(sql, params)
    }

    async get(sql, params) {
        const database = await this.context.createDatabase()
        let row = await this.context.get(database, sql, params)
        await this.context.closeDatabase(database)
        return row ? this.createUserEntity(row) : null
    }

    createUserEntity(row) {
        const contactValueObject = new ContactValueObject(
            row.Contact_Ddd,
            row.Contact_Number,
            // row.Contact_Type
        )
        const userEntity = new UserEntity(
            row.Email,
            row.SaltHash,
            row.StoredHash,
            row.Name_FirstName,
            row.Name_LastName,
            contactValueObject
        )

        userEntity.id = row.Id
        return userEntity
    }
}

module.exports = {
    UserRepository
}