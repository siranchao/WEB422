const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const db = await mongoose.createConnect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        db.once('error', (err) => {
            console.err(err)
        });

        db.once('open', () => {
            console.log(`MongoDB Connected: ${db.connection.host}`)
        });


    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB