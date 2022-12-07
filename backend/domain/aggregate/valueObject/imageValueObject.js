const { InvalidArgumentError } = require("../../errors/invalidArgumentError")

class ImageValueObject {
    base64Image

    constructor(base64Image) {
        this.base64Image = base64Image
        this.validateValueObject()
    }

    validateValueObject() {
        this.validateBase64Image(this.base64Image)
    }

    validateBase64Image(base64Image) {
        if (!base64Image || base64Image === "") {
            throw new InvalidArgumentError("base64Iamge argument cannot be null and empty")
        }
    }
}

module.exports = {
    ImageValueObject
}