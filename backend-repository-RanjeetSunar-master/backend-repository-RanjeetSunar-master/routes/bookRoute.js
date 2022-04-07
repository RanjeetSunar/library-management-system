
const express = require("express");


const router = new express.Router();

const addbooksModel = require("../models/addbookModel")



router.get("/show/books", function (req, res) {

    addbooksModel.find()
        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display jobs Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })


})
router.get("/show/books/:id", function (req, res) {
    const id = req.params.id

    addbooksModel.findById(id)
        .then(function (data) {
            res.status(201).json({ success: true, data: data, message: "display jobs Successfully!!!" })
        })

        .catch(function () {
            res.status(500).json({ message: "Error occured." })
        })


})

router.put("/update/books", async function (req, res) {
    try {
        const data = await addbooksModel.updateOne(
            { _id: req.body.id },
            { bookname: req.body.bookname,
             isbnno: req.body.isbnno ,
            authors: req.body.authors,
            categories: req.body.categories,}


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