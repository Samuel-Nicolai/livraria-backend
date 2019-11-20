const db = require('../../config/db')

const controllerAuthors = {
    async getAuthorsOfBook(id, res) {
        if (id) {
            const authors = await db('bookauthors')
                .join(
                    'bookauthorsbooks',
                    'bookauthors.AuthorID',
                    'bookauthorsbooks.AuthorID'
                )
                .where({
                    ISBN: id
                })
            if (!authors) {
                res.sendStatus(404);
            }
            res.json(authors);
        }
        res.sendStatus(404);
    }
}

module.exports = controllerAuthors