const express = require('express');
const app = express();
const path=require('path');
const PORT = 3000;
const mongodb=require('./database/db')
const userRouter=require('./routes/user.routes')
var cookieParser = require('cookie-parser')
const cookie = require('cookie')
app.use(cookieParser())

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRouter );
app.use(express.static(path.join(__dirname,'public')))

mongodb().then(()=>{
    console.log('DB connected succesfully !')

    // Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:`+PORT);
  });
})


