const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const roomRoutes = require('./routes/room');
const hotelRoutes = require('./routes/hotels');



dotenv.config()



mongoose.connect(process.env.MONGOURI, () => {
    console.log('connected to database')
})
.catch(err => {
    console.log(`cannot connect to database because of error ${err}`)
})


// middleswares

app.use(express.json())

app.use('/auth',authRoutes)
app.use('/hotels',hotelRoutes)
app.use('/user',userRoutes)
app.use('/room',roomRoutes)


app.use((err,req,res,next) =>{
     const errorStatus = err.status || 500
     const errorMessage = err.message || "something in wrong"
     return res.status(errorStatus).json({
         success:false,
         status:errorStatus,
         message: errorMessage,
         stack:err.stack

     });
})



const port = process.env.PORT || 8000





app.listen(port, () => {

    console.log(` is listening on ${port}`)
})