const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        mongoose.connect("mongodb+srv://admin:admin@mbtacluster.ovmtnkb.mongodb.net/?retryWrites=true&w=majority")
        console.log("The backend has connected to the MongoDB database.")
    } catch(error){
        console.log(`${error} could not connect`)
    }
}

