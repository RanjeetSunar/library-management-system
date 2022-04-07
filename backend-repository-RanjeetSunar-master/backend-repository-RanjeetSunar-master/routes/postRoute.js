
const express = require("express");

const router = new express.Router();

// const postModel = require("../models/postModel")

const auth = require("../middleware/auth")


router.post('/post/create', auth.verifyUser, function(req,res){
    
//     const post_tag = req.body.post_tag;
//     const post_content = req.body.post_content;

//     const data = new postModel({post_tag : post_tag}, 
//                 {post_content : post_content})

    //fetches all data from body

    const data = new postModel(req.body)
    data.save()
    .then(function(){
            res.status(201).json({message : "Post created"})
    })
    .catch(function(e){
            res.status().json({message : e})
    })    
})


router.put('/post/update', function(req, res){
    const id = req.body.id;
    const post_tag = req.body.post_tag;
    const post_content = req.body.bapost_content;

    // const data = new userModel({full_name : fullName}, { batch : batch});

    postModel.updateOne({_id : id},
            {post_tag : post_tag},
            {post_content : post_content})
    .then(function(result){
            res.status(201).json({message : "Post updated!"})
    })
    .catch(function(e){
            res.status(500).json({message : e})
    });
})


router.put('/post/update', function(req,res){
        
        //url
        //const id = req.params.id;

        //body
        const id1 = req.body.id;
        const post_tag = req.body.post_tag;

        //post content not working
        const post_content = req.body.post_content;

        postModel.updateOne({_id: id1}, {post_tag: post_tag}, {post_content:post_content})
        .then(function(result){
                res.status(201).json({message :"post updated"})
        })
        .catch(function(e){
                res.status(500).json({message: e})
        })
})

router.delete('/post/delete', function(req,res){

        const id = req.body.id;

        postModel.deleteOne({_id: id})
        .then(function(result){
                res.status(410).json({message:"Post deleted!"})
        }).catch(function(e){
                res.status(500).json({message:e})
        })
})

router.get('/post/show', auth.verifyUser, function(res,req){
        postModel.find()
        .then(function(data){
                res.status(200).json(data)
        })
        .catch(function(e){
                res.status(500).json({message: e})
        })
})

module.exports = router

