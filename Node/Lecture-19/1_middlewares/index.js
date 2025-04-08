const express = require("express");
const app = express();
const PORT = 4444;
const path = require("path");

app.use((req, res,next) => {
  console.log("This Middleware 1");
  next();
});
app.use((req, res,next) => {
  console.log("This Middleware 2");
  next();
});

// Will work for paths:
// 1. /greet
// 2. /greet/hello
// 3. /greet/abc/d/r/e/f
// 4. /greethello(Won't work for this)
app.use("/greet", (req, res, next) => {
  console.log("greet middleware");
  if (!req.query.name) {
    return res.send("can't greet since name not provided");
  }
  next();
});
app.get('/greet', (req, res) => {
    res.send(`Hello, ${req.query.name} kaise ho bhai`);
});


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});