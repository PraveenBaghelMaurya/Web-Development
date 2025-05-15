const express = require('express');
const app = express();
const path=require('path');
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Node.js server is up and running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:PORT`);
});