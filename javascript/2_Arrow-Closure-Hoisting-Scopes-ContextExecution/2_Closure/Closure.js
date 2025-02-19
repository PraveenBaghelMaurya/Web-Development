function say() {
  console.log("I have nothing to say");
  var greet = "Hello ";
  var person = "World ";
  var count = 0;

  function greeting() {
    count++;
    console.log(greet + person + count + " Time");
  }
  return greeting;
}

let calling = say(); //creating variable
// console.log(calling);
calling();
calling();
calling();
calling();

