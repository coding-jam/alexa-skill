const codingJam = require('../api/codingJam')
const texts = require('../texts')

const MAX_TITLES = 4

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ListIntent'
  },
  handle(handlerInput) {
    return codingJam.getTitles().then(titles => {
      const titlesText = titles
        .slice(0, MAX_TITLES)
        .map((title) => `<p>${title}</p>`)
        .join(' ')

      const message = `<speak>
        <p>${texts.LAST_TITLE_INTRODUCTION}</p> ${titlesText}
      </speak>`

      return handlerInput.responseBuilder
        .speak(message)
        .withShouldEndSession(true)
        .getResponse()
    })
  }
}
