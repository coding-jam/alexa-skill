const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = require('./handlers/launch')
const ListIntentHandler = require('./handlers/list')
const StopIntentHandler = require('./handlers/stop')

module.exports.handler = Alexa
  .SkillBuilders
  .custom()
  .addRequestHandlers(LaunchRequestHandler)
  .addRequestHandlers(ListIntentHandler)
  .addRequestHandlers(StopIntentHandler)
  .lambda()
