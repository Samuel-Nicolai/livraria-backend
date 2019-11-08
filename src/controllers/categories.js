const db = require('../../config/db')

const controllerCategories = {
    async getCategories(res) {
        const categories = await db('bookcategories')
        res.json(categories)
    }
}

module.exports = controllerCategories