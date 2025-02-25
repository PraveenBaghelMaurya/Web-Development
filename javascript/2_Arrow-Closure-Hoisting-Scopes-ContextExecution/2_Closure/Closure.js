function say() {
  console.log("I have nothing to say");
  var greet = "Hello ";
  var person = "World ";
  var count = 0;  
  var least_count=100;

  function greeting() {
    count++;
    least_count--;
    console.log(greet + person + count  + " Time "+ least_count);
  }
  return greeting;
}

let calling = say(); //creating variable
// console.log(calling);
calling();
calling();
calling();
calling();

