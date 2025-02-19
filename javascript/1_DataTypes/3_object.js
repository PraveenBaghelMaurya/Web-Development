let person = {
  Name: "Praveen",
  Email: "praven@gmail.com",
  Location: "delhi",
  "": "empty place",
  " ": "space place",
};
// console.log(person);                //print as object type
// console.log(person.location);

// console.log(person."")           //it will work we need to use box bracket
// console.log(person[""])

for (var k in person){
    console.log(k,":\t",person[k])
}
