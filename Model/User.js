const mongoose = require("mongoose");

const user = new mongoose.Schema({
    email:{ type:String,unique:true},
    password:String
})

const User = mongoose.model("User",user);
module.exports = User;