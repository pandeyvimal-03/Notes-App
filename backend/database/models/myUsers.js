const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
        
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

const myUser = mongoose.model('myUser', userSchema);
module.exports = myUser;
