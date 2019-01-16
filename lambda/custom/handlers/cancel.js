const texts = require('../texts')

module.exports = {
    canHandle(handlerInput) {
        if(!handlerInput.requestEnvelope.request.type === 'IntentRequest'){
            return false
          }
      
        return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(texts.EXIT)
            .withShouldEndSession(true)
            .getResponse()
    }
}
