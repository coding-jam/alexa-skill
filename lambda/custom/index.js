const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = require('./handlers/launch')
const ListIntentHandler = require('./handlers/list')
const CancelIntentHandler = require('./handlers/cancel')

module.exports.handler = Alexa
  .SkillBuilders
  .custom()
  .addRequestHandlers(LaunchRequestHandler)
  .addRequestHandlers(ListIntentHandler)
  .addRequestHandlers(CancelIntentHandler)
  .lambda()
