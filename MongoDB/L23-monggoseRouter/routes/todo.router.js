const path = require('path');
const express = require('express');
const router=express.Router();
const PORT = 4444;
const Task=require('../models/Taks.model')


router.post('/', async (req, res) => {
    const { task } = req.body;
    const express = require('express');
    const Task = require('../models/Tasks.model');
    const router = express.Router();
    
    router.post('/', async (req, res) => {
        const { task } = req.body;
    
        try {
            let newTask = new Task({ task });
            await newTask.save();
    
            res.status(200).json({
                message: "Task inserted successfully"
            })
        } catch (err) {
            res.status(503).json({
                message: 'Not able to store task currently',
                err: err.message
            })
        }
    })
    
    router.get('/', async (req, res) => {
        try {
            let data = await Task.find({})
            res.json({
                message: 'Tasks fetched successfully',
                "tasks": data
            })
        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
    })
    
    
    module.exports = router;
    try {
        let newTask = new Task({ task });
        await newTask.save();

        res.status(200).json({
            message: "Task inserted successfully"
        })
    } catch (err) {
        res.status(503).json({
            message: 'Not able to store task currently',
            err: err.message
        })
    }
})


router.get('/', async (req, res) => {
    try {
        let data = await Tasks.find({})
        res.json({
            message: 'Tasks fetched successfully',
            "tasks": data
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})


module.exports=router;