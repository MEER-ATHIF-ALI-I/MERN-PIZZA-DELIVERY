const express = require("express");
const cors = require("cors");

const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js")
app.use(express.json());
app.use(cors({
    origin:["https://mern-pizza-delivery.vercel.app/"],
    methods:["GET","POST", "PUT", "DELETE"],
    credentials: true
  }))
const path = require('path')
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')





app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}






const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`)