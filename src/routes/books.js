const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

// Rota para consultar livros aleatoriamente
router.get('/aleatory', (req, res) => {
    controller.getAleatoryBooks(res)
})

module.exports = router