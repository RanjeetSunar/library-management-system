
//Model is for db table
const mongoose = require("mongoose");

//db table info
const userSchema = new mongoose.Schema({

    college_id : {type : String},
    username : {type : String},
    full_name :{type : String},
    email : {type : String,
        //email validation
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
        'Please fill a valid email address']},

    password : {type : String},
    batch : {type : String},
    profile_pic : {type: String}

})

//User is db table name, User changes to Users in db
//user1 is variable
const user1 = mongoose.model('User', userSchema)

module.exports = user1
