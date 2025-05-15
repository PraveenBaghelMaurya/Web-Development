const fs = require("fs");

class Person {
  addPerson() {
    fs.writeFile("Person.txt", "Hello World", {
      flag: "a",
    })
      .then(() => {
        console.log("File write is successful");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePerson() {
    fs.unlink("Person.txt", (err) => {
      if (err) throw err;
      console.log("Success");
    });
  }

  updatePerson() {
    fs.appendFile("Person.txt", "\nNew line added!", (err) => {
      if (err) {
        console.error("Error appending file:", err);
      } else {
        console.log("File updated successfully!");
      }
    });
  } 
}
