// task URL : https://github.com/Kartik-Mathur/WebDev-12Jan2025/blob/main/L8-Assignment-Closure/1_Assignment-Closures.pdf

function sayHello() {
  let greet = "Hello ";
  let person = "sir ";
  let count = 0;
  console.log("Namaste Jii !!!\n");
  function greeting() {
    count++;
    console.log(greet + person + count + " times");
  }
  return greeting;
}

let okay = sayHello();
okay();
okay();
okay();
