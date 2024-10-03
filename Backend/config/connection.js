const mongoose = require('mongoose')

const dbConnection = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected',connect.connection.host)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection

