const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = require('./handlers/launch')
const PostRequestHandler = require('./handlers/post')
const ListRequestHandler = require('./handlers/list')

module.exports.handler = Alexa
  .SkillBuilders
  .custom()
  .addRequestHandlers(LaunchRequestHandler)
  .addRequestHandlers(PostRequestHandler)
  .addRequestHandlers(ListRequestHandler)
  .lambda()
