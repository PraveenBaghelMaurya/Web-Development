const mongoose=require('mongoose')
// const router=express

// 1. Create a Schema
const todoSchema = new mongoose.Schema({
    task: String,
    status: { type: Boolean, default: false }
});

// 2. Create a model (Collection)
const Tasks = mongoose.model('Tasks', todoSchema);

app.post('/todos', async (req, res) => {
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

module.exports=Tasks;