const { SqliteContext } = require('./infrastructure/database/relational/sqlite/sqliteContext')
const { SetupDatabase } = require('./infrastructure/database/relational/sqlite/setupDatabase')

const { UserRepository } = require('./infrastructure/repository/userRepository')
const { AdoptionRegistrationRepository } = require('./infrastructure/repository/adoptionRegistrationRepository')

const { UserService } = require('./domain/service/userService')
const { RegistrationService } = require('./domain/service/registrationService')
const { EncryptionService } = require('./domain/service/encryptionService')
const { AdoptionRegistrationService } = require('./domain/service/adoptionRegistrationService')
const { LoginService } = require('./domain/service/loginService')
const { ImageService } = require('./domain/service/imageService')

const { ESizeType } = require('./domain/enums/sizeType')

const { UserRegistrationInput } = require('./domain/dto/input/userRegistrationInput')
const { AdoptionRegistrationInput } = require('./domain/dto/input/adoptionRegistrationInput')
const { UserLoginInput } = require('./domain/dto/input/userLoginInput')
const { LocalizationInput } = require('./domain/dto/input/localizationInput')

const fs = require('fs')

// Setup database
const sqliteContext = new SqliteContext()
const setupDatabase = new SetupDatabase(sqliteContext)

const userRepository = new UserRepository(sqliteContext)
const adoptionRegistrationRepository = new AdoptionRegistrationRepository(sqliteContext)

const userService = new UserService(userRepository)
const encryptionService = new EncryptionService()
const registrationService = new RegistrationService(userService, encryptionService)
const loginService = new LoginService(userService, encryptionService)
const imageService = new ImageService()
const adoptionRegistrationService = new AdoptionRegistrationService(imageService, adoptionRegistrationRepository)

setupDatabase
    .setup()
    .then(async () => {
        await registerNewUser()
        const canAccess = await login()

        if (!canAccess) {
            return
        }

        await addNewAdoptionRegistration()
        const adoptionRegistration = await getAdoptionRegistrationByLocalization()
        console.log(adoptionRegistration)
    })

function registerNewUser() {
    const userRegistrationInput = new UserRegistrationInput(
        "mauricioandradegomes@gmail.com",
        "Passarinho_123",
        "Maurício",
        "Andrade Gomes",
        "51",
        "991503883"
    )
    return registrationService.register(userRegistrationInput)
}

function login() {
    const userLoginInput = new UserLoginInput(
        "mauricioandradegomes@gmail.com", 
        "Passarinho_123"
    )
    return loginService.canAccess(userLoginInput)
}

function addNewAdoptionRegistration() {
    const bufferImage = fs.readFileSync('./image.jfif')
    const newAdoptionRegistration = new AdoptionRegistrationInput(
        1,
        bufferImage,
        "Any",
        ESizeType.midsize,
        "Canoas",
        "Rio Grande do Sul"
    )

    return adoptionRegistrationService.add(newAdoptionRegistration)
}

function getAdoptionRegistrationByLocalization() {
    const localizationInput = new LocalizationInput(
        "Rio Grande do Sul",
        "Canoas"
    )
    return adoptionRegistrationService.getByLocalization(localizationInput)
}