const fastify = require('fastify')()

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  url: 'mongodb://mongodb://admin:admin@localhost:27017/:27017'
})})