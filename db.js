const mongoose = require("mongoose");

// var mongoURL = process.env.MONGODB_URL
var mongoURL = 'mongodb+srv://athif:Ryzenathif@cluster0.t5pyu.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose