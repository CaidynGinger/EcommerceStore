const mongoose = require("mongoose");

const clientsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: false
    },
    userState:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Clients", clientsSchema);
