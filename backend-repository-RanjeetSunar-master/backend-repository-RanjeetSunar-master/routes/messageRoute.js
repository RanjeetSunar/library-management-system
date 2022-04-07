const express = require("express");

//bulk export of the route
const router = new express.Router();

//import user table for function
const messageModel = require("../models/messageModel")


router.post('/admin/message',function(req,res){
    // var mydata = new adminModel(req.body);
    // adminModel.save()  

     //body.username is postman json username
     const name1 = req.body.name;
     const email1 = req.body.email;
     const message1 = req.body.message;
    
             var mydata = new messageModel({name : name1, 
             email : email1,
             message : message1});

             
             //then catch error handling
             mydata.save()
             .then(function(){
                     res.status(201).json({message : "Registration successful!"})
             })
             .catch(function(e){
                     res.status().json({message : e})
             });   
     });
     router.get("/show/message", function (req, res) {

        messageModel.find()
            .then(function (data) {
                res.status(201).json({ success: true, data: data, message: "display Successfully!!!" })
            })
    
            .catch(function () {
                res.status(500).json({ message: "Error occured." })
            })
    
    
    })


module.exports = router