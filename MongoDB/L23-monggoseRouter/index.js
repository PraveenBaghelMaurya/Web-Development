const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

const db = require('./database/db');
db().then(() => {
    console.log("Mongodb connected");
})

const todoRouter = require('./routes/todo.router');
app.use('/todos', todoRouter); // Agar request aai toh kis router par bhejni hai batao


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});