const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sanjay:abcd@cluster0.koxb73l.mongodb.net/Fashion', {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose