

const express = require("express");

//bulk export of the route
const router = new express.Router();

//import user table for function
const adminModel = require("../models/adminModel")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


router.post('/admin/register',function(req,res){
    // var mydata = new adminModel(req.body);
    // adminModel.save()  

     //body.username is postman json username
     const username1 = req.body.username;
     const email1 = req.body.email;
     const password1 = req.body.password;

     //encrypt password
     bcrypt.hash(password1, 10, function(err, hash12){
             // console.log(hash1);

             //{model.username : const username1}
             var mydata = new adminModel({username : username1, 
             password : hash12,
             email : email1});

             
             //then catch error handling
             mydata.save()
             .then(function(){
                     res.status(201).json({message : "Registration successful!"})
             })
             .catch(function(e){
                     res.status().json({message : e})
             });   
     });

})

router.post('/admin/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;
   
    

//check if the user name exits or not

    adminModel.findOne({username : username})
    .then(function(userdata){
        if(userdata==null){
            return res.status(403).json({msg: "Invalid login credentials!"})
        }
// valid users
    bcrypt.compare(password, userdata.password, function(err,result){
        if(result===false){
            return res.status(403).json({msg :"Invalid login credentils!"})
        }

// both username and password is correct

        const token = jwt.sign({userId : userdata._id},'anysecretkey');
        console.log(token);
        res.status(200).json({t: token, msg:"login success!"})
    })

//res.status(201).json({msg : " profile pic updated"})

    })
    .catch(function(e){
        res.status(500).json({msg : err})

    });
    

})

module.exports = router