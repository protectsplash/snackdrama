const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { Drama } = require('./Mutation/Drama')
const { thank } = require('./Mutation/thank')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...Drama,
    ...thank,
  },
  Subscription,
  AuthPayload,
}
