

const express = require("express");

//bulk export of the route
const router = new express.Router();

//import user table for function
const addbooksModel = require("../models/addbookModel")


router.post('/admin/addbooks',function(req,res){
    // var mydata = new adminModel(req.body);
    // adminModel.save()  

     //body.username is postman json username
     const bookname1 = req.body.bookname;
     const isbnno1 = req.body.isbnno;
     const authors1 = req.body.authors;
     const categories1 = req.body.categories;

     //encrypt password
    
             // console.log(hash1);

             //{model.username : const username1}
             var mydata = new addbooksModel({bookname : bookname1, 
             isbnno : isbnno1,
             authors : authors1,
            categories : categories1});

             
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