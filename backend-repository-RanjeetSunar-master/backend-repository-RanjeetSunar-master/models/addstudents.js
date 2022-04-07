
//Model is for db table
const mongoose = require("mongoose");

//db table info
const studentSchema = new mongoose.Schema({

    studentname : {type : String,required:'studentname'},
    studentid : {type : String,required:'studentid'},
    batch :{type : String,required:'batch'},

    programmes : {type : String},

})

//User is db table name, User changes to Users in db
//user1 is variable
const addstudents = mongoose.model('student', studentSchema)

module.exports = addstudents
