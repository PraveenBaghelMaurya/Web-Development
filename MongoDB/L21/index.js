const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();
const collection = client.db('DB_name').collection('collection_name').then((data)=>{
    // write statement
}).catch((err)=>{
    // write statement
})


try {
    // console.log('inserting');
    // collection.insertOne({ name: "Praveen", age: 25, email: "praveen@gmail.com" });
    collection.find({name:"Praveen"}).toArray().then((data)=>{
        console.log(data);
    })
// console.log('Found documents =>', findResult);

} catch (error) {
    if (error instanceof MongoServerError) {
        console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('🚀 Node.js server is up and running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
