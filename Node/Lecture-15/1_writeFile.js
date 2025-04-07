const fs = require("fs/promises");

fs.writeFile("NewFile.txt", "Hello World i'm Praveen Kumar", { flag: "w" })
  .then(() => {
    console.log("File created sucessfully");
  })
  .catch((err) => {
    console.log(`You have error${err}`);
  });
