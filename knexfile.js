module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        database: 'livraria',
        user: 'root',
        password: 'root'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}