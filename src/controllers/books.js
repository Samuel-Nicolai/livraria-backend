const db = require('../../config/db')

const controllerBooks = {
    async getAleatoryBooks(res) {
        const aleatoryBooks = await db('bookdescriptions')
            .orderByRaw('RAND()')
            .limit(4)
        res.json(aleatoryBooks)
    }
}

module.exports = controllerBooks