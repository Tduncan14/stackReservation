const express = require('express');


const Router = express.Router();



Router.get('/', (req,res) =>{

    res.send('this the rooms api')
}) 


module.exports = Router