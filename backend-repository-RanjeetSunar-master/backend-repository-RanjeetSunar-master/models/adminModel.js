
const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({

    //Id = {type:Int}
    username : {type : String, required: 'Username is required',},
    email : {type : String, required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
    'Please fill a valid email address']},
    password : {type : String, required: 'password is required',}

})

const admin1 = mongoose.model('Admin', adminSchema)

module.exports = admin1