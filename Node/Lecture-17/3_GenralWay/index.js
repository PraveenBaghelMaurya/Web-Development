const express=require('express')
const app=express()
const PORT=4444;
const path=require('path')

//Even ever we use 'app.use' that mean's it is middleware

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
 //socho agar GET method html file send kr raha hai toh Post ka kya kaam 🤔
})


app.listen(PORT,()=>{
    console.log("Server had stared at ",PORT)
})