'use strict'
const { ObjectId } = require('@fastify/mongodb')

module.exports = async function(fastify, opts) {
    fastify.post('/', async function (req, reply) {
        let restaurantId = process.env.RESTAURANT_ID
        const restaurants = this.mongo.db.collection('restaurants')
    
        const query = {
          '_id': this.mongo.ObjectId(restaurantId),
        }
    
        const doc = {
          '$push': {
            'menu': {
              '_id': this.mongo.ObjectId(),
              ...req.body
            }
          }
        }
        await restaurants.updateOne(query, doc)
        const result = await restaurants.findOne({ '_id': this.mongo.ObjectId(restaurantId) })
        return result
      })
}
