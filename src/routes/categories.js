const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')

// Rota para consultar todos as disciplinas
router.get('/', (req, res) => {
    controller.getCategories(res)
})

module.exports = router