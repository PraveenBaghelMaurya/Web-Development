let mongoose=require('mongoose')

let userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
})


module.exports=mongoose.model('data',userSchema);
