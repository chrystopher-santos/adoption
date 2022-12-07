class ImageService {
    imageToBase64(bufferImage) {
        return bufferImage.toString('base64')
    }

    base64ToImage(base64Image) {
        return Buffer.from(base64Image, 'base64')
    }
}

module.exports = {
    ImageService
}