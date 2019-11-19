const express = require('express')
const router = express.Router()
const controller = require('../controllers/authors')

// Rota para autores de um livro
router.get('/books/:id?', (req, res) => {
    req.params.id ? id = req.params.id : null
    if (!id) {
        res.sendStatus(400)
        return
    }
    controller.getAuthorsOfBook(id, res)
})

module.exports = router