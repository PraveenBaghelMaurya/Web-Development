const fs = require("fs");

let Person = {
  name: "Praveen",
  age: "25",
  gmail: "pk3880397@gmail.com",
};
const data = JSON.stringify(Person);

fs.writeFile("NewFile.js", JSON.stringify(Person), (err) => {
  if (err) throw err;
  else console.log("Work complete the data is ", data);
});
