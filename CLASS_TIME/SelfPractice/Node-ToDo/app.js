const express=require('express')
const app=express();
const PORT=4444;
const {v4:uuid}=require('uuid');
const path=require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))

let todos=[]

app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.post('/todos',(req,res)=>{

    let {task}=req.body;
    todos.push({
        id:uuid(),
        task ,
        status:false
    })

    res.send({
        msg:'Todo added sucessfully',
        task
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})