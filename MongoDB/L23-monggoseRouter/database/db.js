const mongoose=require('mongoose')


module.exports=mongoose.connect('mongodb://127.0.0.1:27017/myDB')
    .then(() => {
        console.log("Mongodb server is connected");
    })


