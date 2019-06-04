let mongoose = require('mongoose');

// Member Schema
let memberSchema = mongoose.Schema({
    username: {
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

}
)

let Member = module.exports = mongoose.model('Member', memberSchema);