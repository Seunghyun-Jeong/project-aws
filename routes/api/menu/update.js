'use strict'
const { ObjectId } = require('@fastify/mongodb')

module.exports = async function(fastify, opts) {
    fastify.put('/:id', async function (req, reply) {
        let restaurantId = process.env.RESTAURANT_ID
        let menuId = req.params.id
        const restaurants = this.mongo.db.collection('restaurants')
    
        const query = {
          '_id': this.mongo.ObjectId(restaurantId),
          'menu._id': this.mongo.ObjectId(menuId)
        }
    
        const doc = {
          '$set': {
            'menu.$.name': req.body.name,
            'menu.$.price': req.body.price
          }
        }
        await restaurants.updateOne(query, doc)
        const result = await restaurants.findOne({ '_id': this.mongo.ObjectId(restaurantId) })
        return result
      })
}