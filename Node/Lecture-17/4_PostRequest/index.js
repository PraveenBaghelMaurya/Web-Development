const express=require('express')
const app=express()
const PORT=4444;
const path=require('path')

// app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
 //socho agar GET method html file send kr raha hai toh Post ka kya kaam 🤔
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("POST REQ RECEVIED")
})


app.listen(PORT,()=>{
    console.log("Server had created at ",PORT)
})