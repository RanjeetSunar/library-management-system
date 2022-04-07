
const express = require("express");


const router = new express.Router();

const addstudent = require("../models/addstudents")



router.get("/show/students", function (req, res) {

    addstudent.find()
        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display students Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })


})
router.get("/show/students/:id", function (req, res) {
    const id = req.params.id

    addstudent.findById(id)
        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })


})

router.put("/update/students", async function (req, res) {
    try {
        const data = await addstudent.updateOne(
            { _id: req.body.id },
            { studentname: req.body.studentname,
             batch: req.body.batch ,
            studentid: req.body.studentid,
            programmes: req.body.programmes,}


        )
        res.json({
            success: true,
            data: data,
            message: "completed"

        })
        console.log("product updated")

    }
    catch (e) {
        res.json({
            message: "error" + e
        })

    }
})


module.exports = router