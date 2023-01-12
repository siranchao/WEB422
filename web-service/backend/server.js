const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const HTTP_PORT = process.env.PORT || 8080

const app = express()

// Middleware: Add support for incoming JSON entities
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }))


// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the index page",
        data: null
    })
});


// Setup api routes
app.use('/api/users', require('./routes/userRoutes'))


// Middleware: catching error routing request
app.use((req, res) => {
    res.status(404).send("Resource not found!")
})




app.listen(HTTP_PORT, () => {
    console.log('Server started on port ' + HTTP_PORT)
})