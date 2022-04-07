const express = require("express");


const router = new express.Router();
const addstudents = require("../models/addstudents");

router.delete("/student/delete/:id",async function(req,res){
    const id =req.params.id;
    console.log(id)
    const deletestudents= await addstudents.deleteOne({_id:id})
    res.json(
        {message:"succesfully deleted",
        data:deletestudents
    
    
    }
        
        )
})

module.exports = router