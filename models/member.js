const mongoose = require('mongoose');

// Member Schema
const memberSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },

}
)

const Member = module.exports = mongoose.model('Member', memberSchema);