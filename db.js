const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://reeha:Roydon@cluster0.g5muxis.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    UseUnifiedTopology:true}).then((response)=>
    {
    console.log("Connected To Database");
    })
.catch((error)=>{
    console.log(error);
    });