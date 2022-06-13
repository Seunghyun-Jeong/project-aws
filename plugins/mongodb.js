const fastify = require('fastify')()

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
fastify.register(require('@fastify/mongodb'), {
  forceClose: true,
  // url: 'mongodb://admin:admin@project2-nlb-3260743723a58d27.elb.ap-northeast-2.amazonaws.com:27017/baedal'
  url: 'mongodb://admin:admin@localhost:27017/baedal'

})})