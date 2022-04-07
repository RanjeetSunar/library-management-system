
//Model is for db table
const mongoose = require("mongoose");

//db table info
const messageSchema = new mongoose.Schema({
    name : {type : String,required:'name'},
    email : {type : String,required:'email'},
    message :{type : String,required:'message'},
    

})

//User is db table name, User changes to Users in db
//user1 is variable
const mess = mongoose.model('message', messageSchema)

module.exports = mess
