//connection.js
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then((res)=>{
    console.log('Mongo connected Successfully');
    
}).catch((err)=>{
    console.log(`Mongo failed due to ${err}`);
    
})