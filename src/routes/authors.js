const express = require('express')
const router = express.Router()
const controller = require('../controllers/authors')

// Rota para autores de um livro
router.get('/books/:id?', (req, res) => {
    controller.getAuthorsOfBook(req.params.id, res)
})

module.exports = router