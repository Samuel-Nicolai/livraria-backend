const db = require('../../config/db')

const controllerCategories = {
    async getCategories(res) {
        const categories = await db('bookcategories')
            .orderBy('CategoryName', 'asc')
        res.json(categories)
    }
}

module.exports = controllerCategories