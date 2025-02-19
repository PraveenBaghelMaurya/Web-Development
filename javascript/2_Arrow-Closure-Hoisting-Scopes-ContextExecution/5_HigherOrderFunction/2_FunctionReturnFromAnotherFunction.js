function generateFun() {
  function helloWorld() {
    console.log("hello world");
  }

  return helloWorld; // Fnction ko return kia hai call nhi kia
}

let newFun = generateFun();
newFun();

/*
Jis language mei we can pass functions as arguments and return them as variables
We can say the language supports Higher Order Functions(H.O.F)
*/
