function callFun(fun) {
  fun(); //helloWorld store in it call then call it
}

function helloWorld() {
  console.log("hello World!!!");
}

callFun(helloWorld); // We can pass function as arguments
