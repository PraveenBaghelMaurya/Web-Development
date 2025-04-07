const fs = require("fs/promises");

fs.readFile("NewFile.txt")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });

// --------------------------2-----------------

fs.readFile("NewFile.txt", { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// --------------------------3-----------------

fs.readFile("Person.json", { encoding: "utf-8" }).then((data) => {
  data = JSON.parse(data);
  console.log(data.name);
  console.log(data.email);
});
