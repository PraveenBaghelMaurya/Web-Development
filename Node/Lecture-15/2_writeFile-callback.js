const fs = require("fs");

fs.writeFile("NewFile.txt", "Hello World This Praveen Enegineer", (err) => {
  if (err) throw err;
  else console.log("File write sucesfully");
});
