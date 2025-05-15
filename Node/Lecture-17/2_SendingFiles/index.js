const express=require('express')
const app=express()
const path=require('path')
const PORT=4444;

app.get('/',(req,res)=>{
    const filePath=path.join(__dirname,'index.html')
    res.sendFile(filePath);//sending file to browser
})

app.listen(PORT,()=>{
    console.log("Server had created with PORT",PORT)
})