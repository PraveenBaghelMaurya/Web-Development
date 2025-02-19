var x;

function helloWorld() {
  console.log("Hello Hello");
}
// HOISTING ke baad ka code

helloWorld();

x = function () {
  console.log("Hello world!!!");
};

x = 20;
console.log(x);

console.log(helloWorld());

// Guess the Output
