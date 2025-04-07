let fs=require('fs').promises

fs.unlink('DeleteMe.txt').then(()=>{
    console.log("Work had completed")
}).catch(err=>{
    console.log(err)
})