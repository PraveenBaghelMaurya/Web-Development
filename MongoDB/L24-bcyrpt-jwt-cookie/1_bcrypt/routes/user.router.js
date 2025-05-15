const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=require('../module/user.module')
const bcrypt=require('bcrypt')

router.post('/',async(req,res)=>{
    const {name,password}=req.body;
    try {
        let user=await User.findOne({name});
        if(user) return res.status(201).json({
            message:"Name already exist, tryanother username"
        })
        //hashing password
        let hashPassword=await bcrypt.hash(password, 10)
        await User.create({name,password:hashPassword})
        res.status(200).json({
            message:'user created succesfully'
        })
        // end

    } catch (error) {
        res.status(500).json({
            message: 'Not able to create user',
            error: error.message
        })
    }

})


module.exports=router;