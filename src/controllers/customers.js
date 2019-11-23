const db = require('../../config/db')

const controllerCustomers = {
    async insertCustomer(customer, res) {
        
        const user = await db('bookcustomers')
            .where({ email: customer.email })
        
        if (user) {
            res.status(400).send('E-mail já cadastrado.')
        }

        try {
            const id = await db('bookcustomers')
                .returning('custID')
                .insert({ ...customer })

            res.send(id)
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
    }
}

module.exports = controllerCustomers