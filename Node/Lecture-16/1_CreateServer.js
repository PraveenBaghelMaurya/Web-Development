const express=require('express')
const app=express()
const PORT=4444;

app.get('/',(req,res)=>{
    res.send("Hello Word")
})

app.listen(PORT,()=>{
    console.log("Server had created with port",PORT)
})