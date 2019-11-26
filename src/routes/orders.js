const express = require('express')
const router = express.Router()
const controller = require('../controllers/orders')

router.get('/', (req, res) => {
    controller.getOrders(res)
})

router.get('/:id?', (req, res) => {
    controller.getOrderbByCustId(req.params.id, res)
})

router.post('/', (req, res) => {
    controller.insertOrder(req.body.custID, req.body.orderdate, res)  
})

router.post('/atomic', (req, res) => {
    controller.insertOrderAtomic(req.body, res)  
})

module.exports = router