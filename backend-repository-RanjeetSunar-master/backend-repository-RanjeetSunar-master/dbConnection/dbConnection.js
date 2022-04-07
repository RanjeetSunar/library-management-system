
const mongoose = require("mongoose");


//database connection

mongoose.connect("mongodb://localhost:27017/LMS", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});