const db = require('../../config/db')

const controllerAuthors = {
    async getAuthorsOfBook(id, res) {
        const authors = await db('bookauthors')
            .join(
                'bookauthorsbooks',
                'bookauthors.AuthorID',
                'bookauthorsbooks.AuthorID'
            )
            .where({
                ISBN: id
            })
        res.json(authors)
    }
}

module.exports = controllerAuthors