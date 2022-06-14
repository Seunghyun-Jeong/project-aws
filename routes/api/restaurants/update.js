'use strict'
const { ObjectId } = require('@fastify/mongodb')

module.exports = async function(fastify, opts) {
    fastify.patch('/', async function (req, reply) {
        let id = process.env.RESTAURANT_ID
        const restaurants = this.mongo.db.collection('restaurants')
        const query = {
        '_id': this.mongo.ObjectId(id)
        }
        const doc = {
        '$set': req.body
        }

        await restaurants.updateOne(query, doc)

        const result = await restaurants.findOne({ '_id': this.mongo.ObjectId(id) })
        return result
  })
}