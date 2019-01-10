const _ = require('lodash')

const codingJam = require('../model/codingJam')

module.exports = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'PostIntent'
  },
  handle (handlerInput) {
    return codingJam.getFirtPost().then(post => {
      const text = _.truncate(post.text, {
        'length': 5000,
        'separator': ' '
      })

      const message = `Ecco un estratto del post intitolato ${post.title}. ${text}. Per leggere l'intero articolo visita Codingjam.it`

      return handlerInput.responseBuilder
        .speak(message)
        .getResponse()
    })
  }

}
