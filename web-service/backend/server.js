const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const HTTP_PORT = process.env.PORT || 8080

//import mongoDB connection
const connectDB = require("./config/connectDB");
connectDB();

const app = express()

// Middleware: CORS-enabled
app.use(cors())

// Middleware: Add support for incoming JSON entities
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.status(200).json({
        message: "API Listening"
    })
});


// Setup api routes
app.use('/api/movies', require('./routes/movieRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


// Middleware: catching error routing request
app.use((req, res) => {
    res.status(404).send("Resource not found!")
})



app.listen(HTTP_PORT, () => {
    console.log('Server started on port ' + HTTP_PORT)
})



