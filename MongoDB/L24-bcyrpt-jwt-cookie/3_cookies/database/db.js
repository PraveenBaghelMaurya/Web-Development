const mongoose=require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/cookie')
    
    
}
module.exports=main