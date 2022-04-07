
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const adminModel = require("../models/adminModel")
const addstudentsModel = require("../models/addstudents")

//guard
module.exports.verifyUser = function(req, res, next){

    try{
        
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, 'AnySecretKey')

        userModel.findOne({_id: data.userData})
        .then(function(result){

            //userData is variable
            //result all user data
            req.userData = result
            next()
        })
        .catch(function(e){
            res.status(401).json({error : e})
        })

    }catch(e) {
        res.status(401).json({error : e})
    }
        
}


module.exports.verifyAdmin = function(req, res, next){

    try{
        
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, 'AnySecretKey')

        adminModel.findOne({_id: data.adminData})
        .then(function(result){

            //userData is variable
            //result all user data
            req.adminData = result
            next()
        })
        .catch(function(e){
            res.status(401).json({error : e})
        })

    }catch(e) {
        res.status(401).json({error : e})
    }
        
}


module.exports.verifyaddstudents = function(req, res, next){

    try{
        
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, 'AnySecretKey')

        addstudentsModel.findOne({_id: data.studentData})
        .then(function(result){

            //userData is variable
            //result all user data
            req.studentData = result
            next()
        })
        .catch(function(e){
            res.status(401).json({error : e})
        })

    }catch(e) {
        res.status(401).json({error : e})
    }
        
}