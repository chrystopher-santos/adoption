const { AdoptionRegistrationEntity } = require('../../domain/aggregate/adoptionRegistrationEntity')
const { ResponsibleEntity } = require('../../domain/aggregate/responsibleEntity')

const { ContactValueObject } = require('../../domain/aggregate/valueObject/contactValueObject')
const { ImageValueObject } = require('../../domain/aggregate/valueObject/imageValueObject')
const { AnimaValueObject } = require('../../domain/aggregate/valueObject/animalValueObject')
const { LocalizationValueObject } = require('../../domain/aggregate/valueObject/localizationValueObject')
const { NameValueObject } = require('../../domain/aggregate/valueObject/nameValueObject')

class AdoptionRegistrationRepository {
    context

    constructor(context) {
        this.context = context
    }

    async add(adoptionRegistration) {
        const database = await this.context.createDatabase()

        const sql = `
        INSERT INTO AdoptionRegistration (
            Responsible_Id,
            Image_Base64Image,
            Localization_City,
            Localization_State,
            Animal_Race,
            Animal_Size
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )`

        const params = [
            adoptionRegistration.responsible.id,
            adoptionRegistration.image.base64Image,
            adoptionRegistration.localization.city,
            adoptionRegistration.localization.state,
            adoptionRegistration.animal.race,
            adoptionRegistration.animal.size
        ]

        await this.context.run(database, sql, params)
        return this.context.closeDatabase(database)
    }

    async getById(id) {
        const sql = `
        SELECT ar.*, 
               u.Contact_Ddd Responsible_Contact_Ddd,
               u.Contact_Number Responsible_Contact_Number,
               u.Name_FirstName,
               u.Name_LastName       
        FROM AdoptionRegistration ar
        JOIN User u
        ON ar.Responsible_Id = u.Id
        WHERE ar.Id = ?`

        const params = [
            id
        ]

        return this.get(sql, params)
    }

    async getByStateAndCity(state, city) {
        //u.Contact_Type Responsible_Contact_Type 
        const sql = `
        SELECT ar.*, 
               u.Contact_Ddd Responsible_Contact_Ddd,
               u.Contact_Number Responsible_Contact_Number,
               u.Name_FirstName,
               u.Name_LastName         
        FROM AdoptionRegistration ar
        JOIN User u
        ON ar.Responsible_Id = u.Id
        WHERE ar.Localization_State = ?
        AND ar.Localization_City = ?`

        const params = [
            state,
            city
        ]

        return this.getAll(sql, params)
    }

    async get(sql, params) {
        const database = await this.context.createDatabase()
        let row = await this.context.get(database, sql, params)
        await this.context.closeDatabase(database)
        return this.createAdoptionRegistrationEntity(row)
    }

    async getAll(sql, params) {
        const database = await this.context.createDatabase()
        let rows = await this.context.getAll(database, sql, params)
        await this.context.closeDatabase(database)
        return rows.map((row) => this.createAdoptionRegistrationEntity(row))
    }

    createAdoptionRegistrationEntity(row) {
        const contactValueObject = new ContactValueObject(
            row.Responsible_Contact_Ddd,
            row.Responsible_Contact_Number
        )
        const nameValueObject = new NameValueObject(
            row.Name_FirstName,
            row.Name_LastName
        )
        const responsibleEntity = new ResponsibleEntity(
            row.Responsible_Id,
            contactValueObject,
            nameValueObject
        )
        const imageValueObject = new ImageValueObject(
            row.Image_Base64Image
        )
        const animalValueObject = new AnimaValueObject(
            row.Animal_Race,
            row.Animal_Size
        )
        const localizationValueObject = new LocalizationValueObject(
            row.Localization_City,
            row.Localization_State
        )
        const adoptionRegistrationEntity = new AdoptionRegistrationEntity(
            responsibleEntity,
            imageValueObject,
            animalValueObject,
            localizationValueObject
        )

        adoptionRegistrationEntity.id = row.Id
        return adoptionRegistrationEntity
    }
}

module.exports = {
    AdoptionRegistrationRepository
}