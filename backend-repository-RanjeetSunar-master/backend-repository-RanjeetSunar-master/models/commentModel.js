
//Model is for db table
const monsgoose = require("mongoose");

//db table info
const commentSchema = new monsgoose.Schema({
   
    commentID :{type : String},
    commentedBy : {type : String},
    commentDate : {type : String},
    comment : {type: String}
})

//User is db table name, User changes to Users in db
//user1 is variable
const comment1 = monsgoose.model('Comment', commentSchema)

module.exports = comment1
