const db = require('../../config/db')

const controllerOrders = {
    async getOrders(res) {
        const order = await db('bookorders')
        res.json(order)
    },

    async insertOrder(custId, Orderdate, res) {
        if(await db('bookorders')
            .insert([{ custID: custId, orderdate: Orderdate }])){
                res.send("Sucess")
            } // {}{}para varios insert     
    },

    async getOrderbByCustId(id, res) {
        const order = await db('bookorders')
            .where({ custID: id })
        res.json(order)
    },

    async insertOrderAtomic(order, res) {
        let now = new Date()
        await db.transaction(async trx => {
            const id = await trx('bookorders')
                .returning('orderID')
                .insert({custID: order.custID, orderdate: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`})

            for (let item of order.itens) {
                await trx('bookorderitems')
                    .insert({
                        orderID: id[0],
                        ISBN: item.ISBN,
                        qty: item.qty,
                        price: item.price
                    })
            }
        })        
        res.json('success')
    }
}

module.exports = controllerOrders

