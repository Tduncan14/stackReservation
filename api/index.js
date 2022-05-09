const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();



dotenv.config()



const port = process.env.PORT || 8000





app.listen(port, () => {

    console.log(` is listening on ${PORT}`)
})