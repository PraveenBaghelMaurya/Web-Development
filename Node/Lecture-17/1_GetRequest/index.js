const express=require('express')
const app=express()
const PORT=4444;

app.get('/',(req,res)=>{
    res.send("Hello world !!!");
})

// edit your URL into browser
// http://localhost:4444/salutation?name=Praveen&last=Kumar

app.get('/salutation',(req,res)=>{
    const data=req.query;
    console.log(data)
    res.send(`Hey !! Good Morning ${data.name} ${data.last}`)
})

//Params ka matlab hota hai parameters, jo hum URL ke andar bhejte hain kisi specific data ko access karne ke liye.

//in routing /:user/:details : stand for dynamic routing


app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
