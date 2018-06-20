const texts = require('../texts')

module.exports = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle (handlerInput) {
    return handlerInput.responseBuilder
      .speak(texts.WELCOME)
      .reprompt(texts.WELCOME)
      .withShouldEndSession(false)
      .getResponse()
  }
}
