let mongoose=require('mongoose')

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/B-CRYPT');
}
module.exports=main