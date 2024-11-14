//schema.js
const mongoose = require('mongoose')

const description = {
    type:String,
    require:true
}

//schema
const dataSchema = new mongoose.Schema({
    email:description,
    phone:description,
    web:description,
    gender:description,
    dob:description,
    nationality:description,
    idnum:description,
    country:description,
    province:description,
    city:description,
    zip:description,
    address:description
})

const users = mongoose.model("users",dataSchema)

module.exports = users

