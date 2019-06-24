const mongoose = require('mongoose');

// account schema
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: false
    },

    age: {
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    height:{
        type: Number,
        required: false
    },
    weight:{
        type: Number,
        required: false
    },

});

const Users = module.exports = mongoose.model('Users', UserSchema);