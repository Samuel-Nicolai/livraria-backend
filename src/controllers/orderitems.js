const db = require('../../config/db')

const controllerOrderItems = {
    async getOrderItems(res) {
        const order = await db('bookorderitems')
        res.json(order)
    },

    async insertOrderItem(orderId, isbn, quant, price, res) {
        if (await db('bookorderitems')
            .insert([{ orderID: orderId, ISBN: isbn, qty: quant, price: price }])){
                res.send("Sucess")
            }
    },

    async getOrderItemsByCustomer(id, res) {
        const order = await db('bookorderitems')
            .join(
                'bookorders',
                'bookorderitems.orderID',
                'bookorders.orderID'
            )
            .where({ custID: id })
            .orderBy('orderdate', 'desc')
        res.json(order)
    },
}

module.exports = controllerOrderItems