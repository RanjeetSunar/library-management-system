const express = require("express");


const router = new express.Router();
const addbook = require("../models/addbookModel");

router.delete("/book/delete/:id",async function(req,res){
    const id =req.params.id;
    console.log(id)
    const deletebook= await addbook.deleteOne({_id:id})
    res.json(
        {message:"succesfully deleted",
        data:deletebook
    
    
    }
        
        )
})

module.exports = router