const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const DB = require('./databse/db')
const userRouter=require('./routes/user.router')

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database and server connection
DB().then(() => {
    console.log('Database connected sucessfully !')

    // Start server
    app.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:` + PORT);
    });
})

// Routes
app.use('/user',userRouter);
