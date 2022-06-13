'use strict'
const { ObjectId } = require('@fastify/mongodb')

module.exports = async function(fastify, opts) {
    fastify.get('/', async function (request, reply) {
        // 우리 매장 정보 수정
        // 토큰 값에 id값 밀어 넣기
        const token = request.headers.authorization.split(" ")[1]
        if (Number(token) === 1) {
            const tokenmarketId = "62a698656c39f12b96186f07"
            const market = this.mongo.db.collection('restaurants')
            const marketId = await market.findOne({_id : ObjectId(tokenmarketId)})
            console.log(marketId)
            return marketId
        }
    }
    )
}