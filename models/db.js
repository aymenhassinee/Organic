const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/db2',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('MongoDB connected');

    } else {
        console.log('error:'+err);
    }
});

require('./order.model');

