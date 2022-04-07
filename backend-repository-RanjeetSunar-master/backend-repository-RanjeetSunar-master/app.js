
const express = require("express");
const cors = require("cors")
//import db conncetion
require("./dbConnection/dbConnection")


//to fetch data from body
const bodyParser = require("body-parser");
 

const userRoute = require("./routes/userRoute")
const commentRoute = require("./routes/commentRoute")
const postRoute = require("./routes/postRoute")
const adminRoute = require("./routes/adminRoute")
const addstudentRoute =require("./routes/addstudentRoute")
const addbookRoute =require("./routes/addbookRoute")
const bookRoute =require("./routes/bookRoute")
const studentRoute = require('./routes/studentRoute')
const deleteRoute = require('./routes/deletestudentRoute')
const deletebookRoute = require('./routes/deletebookRoute')
const bookupdateRoute = require('./routes/bookupdateRoute')
const bookissue = require('./routes/bookissuedRoute')
const message = require('./routes/messageRoute')
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//runs userRuute
app.use(userRoute)
app.use(commentRoute)
app.use(postRoute)
app.use(adminRoute)
app.use(addstudentRoute)
app.use(addbookRoute)
app.use(bookRoute)
app.use(studentRoute)
app.use(deleteRoute)
app.use(deletebookRoute)
app.use(bookupdateRoute)
app.use(bookissue)
app.use(message)
app.listen(90);