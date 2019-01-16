const texts = require('../texts')

module.exports = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(texts.EXIT)
            .withShouldEndSession(true)
            .getResponse()
    }
}
