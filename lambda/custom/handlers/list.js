const codingJam = require('../model/codingJam')

module.exports = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ListIntent'
  },
  handle (handlerInput) {
    return codingJam.getTitles().then(titles => {
      const titlesText = titles.map((title, i) => `${i + 1}: ${title}.`).join(' ')

      const message = `Ecco i titoli degli ultimi articoli di codingjam. ${titlesText}`

      return handlerInput.responseBuilder
        .speak(message)
        .getResponse()
    })
  }
}
