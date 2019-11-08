const db = require('../../config/db')

const controllerBooks = {
    async getAleatoryBooks(res) {
        const aleatoryBooks = await db('bookdescriptions')
            .join(
                'bookauthorsbooks',
                'bookdescriptions.ISBN',
                'bookauthorsbooks.ISBN'
            )
            .join(
                'bookauthors',
                'bookauthorsbooks.AuthorID',
                'bookauthors.AuthorID',
            )
            .orderByRaw('RAND()')
            .limit(4)
        res.json(aleatoryBooks)
    }
}

module.exports = controllerBooks