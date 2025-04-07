const fs=require('fs')

fs.unlink("DeleteMe.txt",(err)=>{
    if(err) console.log(err)
        console.log("Work had completed")
})