const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')

// Rota para consultar todos as disciplinas
router.get('/', (req, res) => {
    const result = controller.getCategories(res)
})

module.exports = router