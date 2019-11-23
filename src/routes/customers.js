const express = require('express')
const router = express.Router()
const controller = require('../controllers/customers')

router.post('/', (req, res) => {
    controller.insertCustomer(req.body, res)
})

router.post('/login', (req, res) => {
    controller.login(req.body.email, res)
})

module.exports = router