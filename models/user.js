const mongoose = require('mongoose')

//! Schema...

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    }
},
{timestamps:true},)

//! Model...

const user = mongoose.model("user", userSchema)

module.exports = {user}