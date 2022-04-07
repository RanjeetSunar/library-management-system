
const multer = require("multer");


// where to store our file = image, videos, text files anuthing
const storage = multer.diskStorage({
   // where and with what name
   //cb = callback function
//

    destination : function(req, file, cb){
        cb(null, "./files")  //folder name
    },

    filename: function(req, file,cb){
        cb(null, Date.now() + file.originalname)
    }

})




//const filter = function()


const upload = multer({
    storage : storage,
   // fileFilter : filter
});




module.exports = upload;