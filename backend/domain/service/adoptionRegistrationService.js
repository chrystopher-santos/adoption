const { AdoptionRegistrationEntity } = require("../aggregate/adoptionRegistrationEntity")
const { ResponsibleEntity } = require("../aggregate/responsibleEntity")
const { AnimaValueObject } = require("../aggregate/valueObject/animalValueObject")
const { ImageValueObject } = require("../aggregate/valueObject/imageValueObject")
const { LocalizationValueObject } = require("../aggregate/valueObject/localizationValueObject")

class AdoptionRegistrationService {
    imageService
    adoptionRegistrationFactory

    constructor(
        imageService,
        adoptionRegistrationRepositoy
    ) {
        this.imageService = imageService
        this.adoptionRegistrationRepositoy = adoptionRegistrationRepositoy
    }

    add(adoptionRegistrationInput) {
        const responsibleEntity = new ResponsibleEntity(
            adoptionRegistrationInput.userId,
            null
        )
        const base64Image = this.imageService.imageToBase64(adoptionRegistrationInput.bufferImage)
        const imageValueObject = new ImageValueObject(
            base64Image
        )
        const animalValueObject = new AnimaValueObject(
            adoptionRegistrationInput.race,
            adoptionRegistrationInput.size
        )
        const localizationValueObject = new LocalizationValueObject(
            adoptionRegistrationInput.city,
            adoptionRegistrationInput.state
        )
        const adoptionRegistrationEntity = new AdoptionRegistrationEntity(
            responsibleEntity,
            imageValueObject,
            animalValueObject,
            localizationValueObject
        )
        
        return this.adoptionRegistrationRepositoy.add(adoptionRegistrationEntity)
    }

    getByIdentifier(id) {
        return this.adoptionRegistrationRepositoy.getById(id)
    }

    getByLocalization(localizationInput) {
        return this.adoptionRegistrationRepositoy.getByStateAndCity(localizationInput.state, localizationInput.city)
    }
}

module.exports = {
    AdoptionRegistrationService
}