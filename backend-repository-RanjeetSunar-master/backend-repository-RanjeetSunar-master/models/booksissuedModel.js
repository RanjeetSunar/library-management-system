
//Model is for db table
const mongoose = require("mongoose");

//db table info
const booksissuedSchema = new mongoose.Schema({
    bookname : {type : String,required:'bookname'},
    studentid : {type : String,required:'studentid'},
    start :{type : String,required:'start'},
    end : {type : String,required:'end'},

})

//User is db table name, User changes to Users in db
//user1 is variable
const addissued = mongoose.model('bookissued', booksissuedSchema)

module.exports = addissued
