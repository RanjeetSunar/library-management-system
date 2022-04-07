

const express = require("express");

//bulk export of the route
const router = new express.Router();

//import user table for function
const addstudentsModel = require("../models/addstudents")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


router.post('/admin/addstudents',function(req,res){
    // var mydata = new adminModel(req.body);
    // adminModel.save()  

     //body.username is postman json username
     const studentname1 = req.body.studentname;
     const studentid1 = req.body.studentid;
     const batch1 = req.body.batch;
     const programmes1 = req.body.programmes;

     //encrypt password
    
             // console.log(hash1);

             //{model.username : const username1}
             var mydata = new addstudentsModel({studentname : studentname1, 
             studentid : studentid1,
             batch : batch1,
            programmes : programmes1});

             
             //then catch error handling
             mydata.save()
             .then(function(){
                     res.status(201).json({message : "Registration successful!"})
             })
             .catch(function(e){
                     res.status().json({message : e})
             });   
     });



module.exports = router