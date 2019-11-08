const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// Import de rotas
const routerCategories = require('./routes/categories')
const routerBooks = require('../src/routes/books')
//const routerMatricula = require('../src/routes/matricula')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

const router = express.Router()
router.get('/', (req, res) => {
    res.json('Go to CodeBooks!')
})

app.use('/', router)
app.use('/categories', routerCategories)
app.use('/books', routerBooks)
//app.use('/matricula', routerMatricula)

app.listen(port)
console.log(`Listening in http://localhost:${port} 🚀️`)