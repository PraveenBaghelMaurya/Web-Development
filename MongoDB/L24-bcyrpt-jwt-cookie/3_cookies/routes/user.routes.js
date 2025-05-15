const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../model/user.model')
const cookie = require('cookie')




router.post('/signup',async (req,res)=>{
    const {email,password}=req.body;

    await User.create({email,password});
    res.send({
        msg:'user singup success'
    })

});

router.post('/login',async(req,res)=>{
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        msg: "Invalid email id"
    })
    if (user.password !== password) return res.status(400).json({
        msg: "Invalid password"
    })

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("name", String(user.email), {
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true
        }),
    );

    res.status(200).json({
        msg: "Welcome to app"
    })
})

router.get('/dashboard',async (req,res)=>{
    const {name} = req.cookies;// ftech
    let user = await User.findOne({email:name});
    if(!user) return res.send('<h1>Invalid Cookie hai</h1>');

    res.send("Welcome to internal app dashboard");
})

module.exports=router;