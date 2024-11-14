//index.js
require ('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./Routing/router')

require('./DB/connection')

const ggServer = express()

ggServer.use(cors())

ggServer.use(express.json())

ggServer.use(router)

const PORT = 4000 || process.env

ggServer.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
    
})