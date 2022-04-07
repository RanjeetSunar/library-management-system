const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({

    bookname : {type : String, required: ' is required'},
    isbnno : {type : String, required: 'password is required'},
    authors :{type : String,required: 'password is required'},
    categories : {type : String, required: 'password is required'},

})


const addbooks = mongoose.model('books', bookSchema)

module.exports = addbooks
