

const express = require("express");

//bulk export of the route
const router = new express.Router();

//import user table for function
const issuedModel = require("../models/booksissuedModel")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


router.post('/admin/bookissued',function(req,res){
    
     const bookname1 = req.body.bookname;
     const studentid1 = req.body.studentid;
     const start1 = req.body.start;
     const end1 = req.body.end;

     
             var mydata = new issuedModel({bookname : bookname1, 
             studentid : studentid1,
             start : start1,
            end : end1});

             
             //then catch error handling
             mydata.save()
             .then(function(){
                     res.status(201).json({message : "successful!"})
             })
             .catch(function(e){
                     res.status().json({message : e})
             });   
     });
     router.get("/show/issuedbooks", function (req, res) {

        issuedModel.find()
            .then(function (data) {
                res.status(201).json({ success: true, data: data, message: "display Successfully!!!" })
            })
    
            .catch(function () {
                res.status(500).json({ message: "Error occured." })
            })
    
    
    })
    router.delete("/bookissued/delete/:id",async function(req,res){
        const id =req.params.id;
        console.log(id)
        const deletebook= await issuedModel.deleteOne({_id:id})
        res.json(
            {message:"succesfully deleted",
            data:deletebook
        
        
        }
            
            )
    })


module.exports = router