const mongoose=require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/myDatabase')
}
module.exports=main