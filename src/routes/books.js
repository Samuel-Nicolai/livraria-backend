const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

// Rota para consultar livros aleatoriamente
router.get('/aleatory', (req, res) => {
    controller.getAleatoryBooks(res)
})

router.get('/:id?', (req, res) => {
    controller.getBookById(req.params.id, res)
})

module.exports = router