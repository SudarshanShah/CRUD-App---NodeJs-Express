const mongoose = require('mongoose')

/*
RDBMS -> MongoDB
-> Database -> Database
-> Tables -> Collections
-> Rows -> Documents
-> Columns -> Fields
*/ 

// Creating the model using 'mongoose'
const alienSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required : true
    },
    sub: {
       type: Boolean,
       required: true,
       default: false 
    }
})

// exporting the model for use
module.exports = mongoose.model('Alien', alienSchema)