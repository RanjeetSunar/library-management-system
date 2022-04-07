
const express = require("express");

//bulk export of the route
const router1 = new express.Router();

//import user table for function
const userModel = require("../models/userModel")

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken")
const upload = require("../middleware/fileupload");
const router = require("./adminRoute");


router1.post('/user/register',function(req,res){
        
        //body.username is postman json username
        const username1 = req.body.username;
        const email1 = req.body.email;
        const password1 = req.body.password;

        //encrypt password
        bcrypt.hash(password1, 10, function(err, hash12){
                // console.log(hash1);

                //{model.username : const username1}
                var mydata = new userModel({username : username1, 
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

        
        //var mydata = new userModel(req.body);
})

router1.put('/user/update', function(req,res){
        const id = req.body.id;
        const fullName = req.body.fname;
        const batch = req.body.batch;

        // const data = new userModel({full_name : fullName}, { batch : batch});

        userModel.updateOne({_id : id},{full_name : fullName}, { batch : batch})
        .then(function(result){
                res.status(201).json({message : "successully updated!"})
        })
        .catch(function(e){
                res.status(500).json({message : e})
        });
})



//login

router1.post("/user/login", function(req,res){
        const username = req.body.username;
        const password = req.body.password;

        // username validation
        userModel.findOne({username : username})
        .then(function(userData){
                //res.status(302).json({message: "found"})
                
                if (userData == null){
                        return res.status(403).json({message : "Invalid Login!"})
                }

                // parameters(body.password, database.password )
                bcrypt.compare(password, userData.password, function(err, result){
                        
                        if(result === false){
                                return res.status(403).json({message : "Invalid Login!"})
                        }

                        //token for valid user
                        //console.log("log in success")

                        //create token
                        const token = jwt.sign({userID : userData._id}, "AnySecretKey")  //anysecretkey can be anything
                        res.status(200).json({token : token, message: "Auth Success!"})
                        
                       
                })
        })
        .catch()
})

//forgot password




//file insert / upload / profile pic

// router.post("/profile/upload", upload.single("myimage"), function(req,res){
//        // res.send()
//         const data = new Users({
//                 profile_pic : req.file.filename
//         })
//         data.save()
//         .then(function(result){
//                 res.status(201).json({message : "Profile picture uploaded!"})
//         })
//         .catch(function(e){
//                 res.status(500).json({message : e})
//         });
// })


//updates pp in user table

router.put("/user/ipdate", upload.single("myimage"), function(req,res){
        const id = req.body.id;
        const data = req.file.filename;
       
  //      userModel.updateOne({_id : id},{profile_pic : data})
        userModel.updateOne({profile_pic : data})
        .then(function(result){
                res.status(201).json({message : "successully updated!"})
        })
        .catch(function(e){
                res.status(500).json({message : e})
        });
 })
 


module.exports = router1