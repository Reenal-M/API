const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    post:String
    
});

module.exports=mongoose.model("faculty",facultySchema);