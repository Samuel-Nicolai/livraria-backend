const db = require('../../config/db')

const controllerCustomers = {
    async insertCustomer(customer, res) {

        try {
            const id = await db('bookcustomers')
                .returning('custID')
                .insert({ ...customer })

            if (id) {
                res.send({
                    custID: id[0],
                    ...customer
                })
            }
        } catch (e) {
            res.status(500).send('Erro ao inserir usuário')
        }
    },
    async login(email, res) {
        const user = await db('bookcustomers')
            .where({ email })
            .first()

        if (user) {
            res.status(200).send(user)
        }
        else {
            res.status(400).send('Usuário inexistente.')
        }
    },
    async updateCustomer(customer, res) {

        try {
            const id = await db('bookcustomers')
                .returning('custID')
                .update({ ...customer })
                .where({ custID: customer.custID })

            if (id) {
                res.send({
                    custID: id[0],
                    ...customer
                })
            }
        } catch (e) {
            res.status(500).send('Erro ao inserir usuário')
        }
    },
}

module.exports = controllerCustomers